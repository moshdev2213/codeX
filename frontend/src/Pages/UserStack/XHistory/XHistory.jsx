import React, { useEffect, useState } from 'react'
import HistoryTable from './HistoryTable/HistoryTable'
import GettingStarted from '../../../Components/GettingStarted/GettingStarted'
import HistoryRecord from './HistoryRecord/HistoryRecord'
import LocalStore from '../../../Store/LocalStore'
import BugSevice from '../../../Services/Bug/BugSevice'
import PreLoader from '../../../Components/PreLoader/PreLoader'

export default function XHistory() {
    const userEmail = LocalStore.getToken().email
    const [bugs, setBugs] = useState(null)
    const [bug, setBug] = useState(null)
    const [loading, setLoading] = useState(false)
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
                                <HistoryTable bugs={bugs} viewBug={viewBug}/>
                                <HistoryRecord bug={bug} />
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
