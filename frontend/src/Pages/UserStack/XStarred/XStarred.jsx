import React from 'react'
import StarredTable from './StarredTable/StarredTable'
import StarredRecord from './StarredRecord/StarredRecord'

export default function XStarred() {
    return (
        <div className="body-wrapper  py-3 " style={{ marginLeft: '230px', height: '100%' }}>
            <div className="container h-100" style={{ maxWidth: 'none' }}>
                <div className="d-flex justify-content-between h-100">
                    <StarredTable />
                    <StarredRecord />
                </div>
            </div>
        </div>
    )
}
