import React from 'react'
import HistoryTable from './HistoryTable/HistoryTable'
import GettingStarted from '../../../Components/GettingStarted/GettingStarted'
import HistoryRecord from './HistoryRecord/HistoryRecord'

export default function XHistory() {
    return (
        <div className="body-wrapper  py-3 " style={{ marginLeft: '230px', height: '100%' }}>
            <div className="container h-100" style={{ maxWidth: 'none' }}>
                <div className="d-flex justify-content-between h-100">
                    <HistoryTable />
                    {/* <GettingStarted/> */}
                    <HistoryRecord/>
                </div>
            </div>
        </div>
    )
}
