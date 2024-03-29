import React, { useEffect, useState } from 'react'
import HistoryTable from './HistoryTable/HistoryTable'
import GettingStarted from '../../../Components/GettingStarted/GettingStarted'
import HistoryRecord from './HistoryRecord/HistoryRecord'
import LocalStore from '../../../Store/LocalStore'
import BugSevice from '../../../Services/Bug/BugSevice'
import PreLoader from '../../../Components/PreLoader/PreLoader'
import Toaster from '../../../Utils/Constants/Toaster'
import CusSwal from '../../../Utils/CustomSwal/CusSwal'

export default function XHistory() {
    const userEmail = LocalStore.getToken().email
    const [bugs, setBugs] = useState(null)
    const [bug, setBug] = useState(null)
    const [loading, setLoading] = useState(false)
    const [bugFavorites, setBugFavorites] = useState(false)
    const [bugStarred, setBugStarred] = useState(false)

    const fetchAllBugs = async () => {
        setLoading(true);
        try {
            const result = await BugSevice.getAllBugs(userEmail);
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
    const removeBug = (id) => {
        CusSwal.deleteConfiramation(async () => {
            setLoading(true);
            Toaster.loadingToast('Removing Bug .........')
            try {
                const result = await BugSevice.removeBug(userEmail, id);
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
    const addBugToFavourite = async (id) => {
        setLoading(true);
        Toaster.loadingToast('Adding To Favourite...');
        try {
            const result = await BugSevice.addBugToFavourite(userEmail, id);
            if (result.data.code === 200) {
                // setBugFavorites(result.data.data.bug[0].favourite)
                setBugFavorites(true)
                Toaster.justToast('success', 'bug added to favorites', () => {
                });
            }
        } catch (error) {
            console.error(error);
            alert(error)
        } finally {
            setLoading(false);
            Toaster.dismissLoadingToast();
        }
    }
    const addBugToStarred = async (id) => {
        setLoading(true);
        Toaster.loadingToast('Adding To Starred...');
        try {
            const result = await BugSevice.addBugToStarred(userEmail, id);
            if (result.data.code === 200) {
                // setBugStarred(result.data.data.bug[0].starred)
                setBugStarred(true)
                Toaster.justToast('success', 'bug added to Starred', () => {
                });
            }
        } catch (error) {
            console.error(error);
            alert(error)
        } finally {
            setLoading(false);
            Toaster.dismissLoadingToast();
        }
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
                                    <HistoryTable
                                        bugs={bugs}
                                        viewBug={viewBug}
                                        removeBug={removeBug}
                                        addBugToStarred={addBugToStarred}
                                        addBugToFavourite={addBugToFavourite} />
                                <HistoryRecord bug={bug} />
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
