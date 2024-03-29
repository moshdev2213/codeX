import React from 'react'

export default function StarredTable() {
    return (
        <div className="me-4" style={{ flex: 1 }}>
            <div className="card h-100 p-3 w-100 shadow-sm">
                <div className="row h-100">
                    <div className='col-12 rounded d-flex flex-column'>
                        <div className="mb-3 flex-grow-1">
                            {/* header */}
                            <div class="d-flex justify-content-start align-items-center" role="search">
                                <h4 className='h1 fw-bolder'>Starred List</h4>
                            </div>
                            {/* table */}
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* end */}
                            <div class="d-flex justify-content-between align-items-md-center px-6 py-3 flex-md-row flex-column gap-4">
                                <span>Showing 23 entries</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
