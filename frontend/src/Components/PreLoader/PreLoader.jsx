import React from 'react'

export default function PreLoader() {
    return (
        <div className="overflow-scroll overflow-x-hidden" style={{ flex: 1 }}>
            <div className="h-100 w-100 shadow-sm">
                <div className="row h-100">
                    <div className="col-12 rounded">
                        <div className="card p-3 shadow-sm mb-3 h-100">
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
