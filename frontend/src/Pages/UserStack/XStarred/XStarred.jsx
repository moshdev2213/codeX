import React, { useEffect, useState } from 'react'
import StarredTable from './StarredTable/StarredTable'
import StarredRecord from './StarredRecord/StarredRecord'
import LocalStore from '../../../Store/LocalStore'
import PreLoader from '../../../Components/PreLoader/PreLoader'
import BugSevice from '../../../Services/Bug/BugSevice'
import CusSwal from '../../../Utils/CustomSwal/CusSwal'
import Toaster from '../../../Utils/Constants/Toaster'

export default function XStarred() {
    const userEmail = LocalStore.getToken().email
    const [bugs, setBugs] = useState(null)
    const [bug, setBug] = useState(null)
    const [loading, setLoading] = useState(false)
    const fetchAllBugs = async () => {
        setLoading(true);
        try {
            const result = await BugSevice.getAllStarredBugs(userEmail);
            if (result.data.code === 200) {
                setBugs(result.data.data.bugs)
                setBug(result.data.data.bugs[0])
            }
        } catch (error) {
            console.error(error);
            alert(error)
        } finally {
            setLoading(false);
        }
    }
    const viewBug = (id) => {
        // setLoading(true)
        const selectedBug = bugs.find(bug => bug._id === id);
        if (selectedBug) {
            setBug(selectedBug);
        }
        // setLoading(false)
    }
    const removeBugStarred = (id) => {
        CusSwal.deleteConfiramation(async () => {
            setLoading(true);
            Toaster.loadingToast('Removing Bug from starred.........')
            try {
                const result = await BugSevice.removeBugStarred(userEmail, id);
                if (result.data.code === 200) {
                    fetchAllBugs()
                    Toaster.justToast('success', 'removed succesffully', () => {
                    })
                }
            } catch (error) {
                console.error(error);
                alert(error)
            } finally {
                setLoading(false);
                Toaster.dismissLoadingToast()
            }
        })
    }
    useEffect(() => {
        fetchAllBugs()
    }, [])
    return (
        <div className="body-wrapper  py-3 " style={{ marginLeft: '230px', height: '100%' }}>
            <div className="container h-100" style={{ maxWidth: 'none' }}>
                <div className="d-flex justify-content-between h-100">
                    {
                        loading ? (
                            <PreLoader />
                        ) : (
                            <>
                                <StarredTable bugs={bugs} viewBug={viewBug} removeBugStarred={removeBugStarred} />
                                <StarredRecord bug={bug} />
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
