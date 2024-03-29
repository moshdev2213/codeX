import React from 'react'
import DateFormatter from '../../../../Utils/Constants/DateFormatter'

export default function StarredTable({ bugs, viewBug, removeBugStarred }) {
    return (
        <div className="overflow-scroll overflow-x-hidden me-2" style={{ flex: 1 }}>
            <div className=" h-100 w-100 shadow-sm">
                <div className="row h-100">
                    <div className='col-12 rounded d-flex flex-column'>
                        <div className="card p-3 mb-3 flex-grow-1">
                            {/* header */}
                            <div class="d-flex flex-row justify-content-between align-items-center" role="search">
                                <div className="div">
                                    <h4 className='h1 fw-bolder'>Starred Bugs</h4>
                                    <p>showing the total bugs that user has favoured</p>
                                </div>
                                <div className="div">
                                    <h1>🐞🌟</h1>
                                </div>
                            </div>
                            {/* table */}
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Bug Req</th>
                                        <th scope="col">Created</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bugs !== null ? (
                                            <>
                                                {
                                                    bugs.map((bug) => {
                                                        return (
                                                            <tr key={bug._id}>
                                                                <td>
                                                                    {bug.email}
                                                                </td>
                                                                {/* <td >
                                                                    <div dangerouslySetInnerHTML={{ __html: bug.bug_res_html}}></div>
                                                                </td> */}
                                                                <td>{DateFormatter.formatDate(bug.created_at)}</td>
                                                                <td className='d-flex justify-content-between align-items-center'>
                                                                    <button onClick={() => {
                                                                        removeBugStarred(bug._id)
                                                                    }} className='btn btn-danger rounded text-white p-2'>Remove</button>
                                                                    <button onClick={() => {
                                                                        viewBug(bug._id)
                                                                    }} className='btn btn-dark rounded text-white p-2'>More</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </>
                                        ) : (
                                            <tr>
                                                <td>Not Found</td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
