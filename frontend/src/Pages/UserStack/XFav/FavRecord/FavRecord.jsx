import React from 'react'

export default function FavRecord({ bug }) {
    if (!bug) {
        return null; // or you can return a message indicating that bug is null
    }
    return (
        <div className="overflow-scroll overflow-x-hidden" style={{ flex: 1 }}>
            <div className="h-100 w-100 shadow-sm" >
                <div className="row h-100">
                    <div className="col-12 rounded">
                        <div className="card p-3 shadow-sm mb-3">
                            <h1 className='fw-bolder'>Favorite Records</h1>
                            <p className='text-black fs-6'><span className='text-bg-dark fst-italic'>CODEX</span> maintains a user centric bug favorite history record for future purposes of the users ease.</p>

                            <p className='text-black fs-5 fw-bolder mb-2'>Bug Request</p>
                            <div className="p-2 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                <div dangerouslySetInnerHTML={{ __html: bug.bug_req }} />
                            </div>

                            <p className='text-black fs-5 fw-bolder mt-4 mb-2'>Bug Record</p>
                            <div className="p-2 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                <div dangerouslySetInnerHTML={{ __html: bug.bug_res_html }} />
                            </div>

                            {typeof (bug.bug_lng_sin_html || bug.bug_lng_tamil_html) !== 'undefined' && (
                                <>
                                    <p className='text-black fs-5 fw-bolder mt-4 mb-2'>Sinhala</p>
                                    <div className="p-2 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                        <div dangerouslySetInnerHTML={{ __html: bug.bug_lng_sin_html }} />
                                        <div className="d-flex justify-content-end align-items-center">
                                        </div>
                                    </div>

                                    <p className='text-black fs-5 fw-bolder mt-4 mb-2'>Tamil</p>
                                    <div className="p-2 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                        <div dangerouslySetInnerHTML={{ __html: bug.bug_lng_tamil_html }} />
                                        <div className="d-flex justify-content-end align-items-center">
                                        </div>
                                    </div>
                                </>
                            )}
                            {
                                typeof (bug.bug_ref_html) !== 'undefined' && (
                                    <>
                                        <p className='text-black fs-5 fw-bolder mt-4 mb-2'>Bug References </p>
                                        <div className="p-2 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                            <div dangerouslySetInnerHTML={{ __html: bug.bug_ref_html }} />
                                        </div>
                                    </>
                                )
                            }

                            <p className='text-black mt-4'>Whether you're a beginner or an experienced coder, CODEX streamlines the debugging process, saving you time and effort while ensuring optimal code performance. Experience the power of CODEX and elevate your coding experience today!</p>
                            <div className="d-flex justify-content-end align-items-center">
                                <p className='text-success fw-bolder me-3'>Trusted by millions</p>
                                <p className='text-danger fw-bolder'>Secured Data</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
