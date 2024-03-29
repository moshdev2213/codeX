import React, { useEffect, useState } from 'react'
import FavTable from './FavTable/FavTable'
import FavRecord from './FavRecord/FavRecord'
import LocalStore from '../../../Store/LocalStore'
import BugSevice from '../../../Services/Bug/BugSevice'
import PreLoader from '../../../Components/PreLoader/PreLoader'
import CusSwal from '../../../Utils/CustomSwal/CusSwal'
import Toaster from '../../../Utils/Constants/Toaster'

export default function XFav() {
    const userEmail = LocalStore.getToken().email
    const [bugs, setBugs] = useState(null)
    const [bug, setBug] = useState(null)
    const [loading, setLoading] = useState(false)
    const fetchAllBugs = async () => {
        setLoading(true);
        try {
            const result = await BugSevice.getAllFavouriteBugs(userEmail);
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
    const removeBugFavourite = (id) => {
        CusSwal.deleteConfiramation(async () => {
            setLoading(true);
            Toaster.loadingToast('Removing from favourites Bug .........')
            try {
                const result = await BugSevice.removeBugFavourite(userEmail, id);
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
                                    <FavTable bugs={bugs} viewBug={viewBug} removeBugFavourite={removeBugFavourite} />
                                <FavRecord bug={bug} />
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
