import React from 'react'
import FavTable from './FavTable/FavTable'
import FavRecord from './FavRecord/FavRecord'

export default function XFav() {
    return (
        <div className="body-wrapper  py-3 " style={{ marginLeft: '230px', height: '100%' }}>
            <div className="container h-100" style={{ maxWidth: 'none' }}>
                <div className="d-flex justify-content-between h-100">
                    <FavTable />
                    <FavRecord />
                </div>
            </div>
        </div>
    )
}
