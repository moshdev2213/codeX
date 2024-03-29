import React from 'react'

export default function XBuger({
    loading,
    bugReport,
    bugNative,
    getNativeLanguage,
    bugReference,
    generateBugReference,
    addBugToFavourite,
    addBugToStarred,
    bugStarred,
    bugFavorites
}) {
    return (
        <>
            <div className="overflow-scroll overflow-x-hidden" style={{ flex: 1 }}>
                <div className="h-100 w-100 shadow-sm" >
                    <div className="row h-100">
                        <div className="col-12 rounded">
                            <div className="card p-3 shadow-sm mb-3">
                                <h1 className='fw-bolder'>Analyzed Record</h1>
                                <p className='text-black fs-6'>Analyzed Result is shown below. Please choose options that matches the needs</p>
                                <p className='text-black fs-5 fw-bolder mb-2'>Bug Record</p>
                                <div className="p-3 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                    <div dangerouslySetInnerHTML={{ __html: bugReport.html }} />
                                    <div className="d-flex justify-content-end align-items-center">
                                        <button disabled={loading} onClick={() => {
                                            getNativeLanguage(bugReport.id)
                                        }} className='btn btn-dark mx-3'>Native</button>
                                        <button onClick={() => {
                                            addBugToStarred(bugReport.id)
                                        }} disabled={loading || bugStarred} className='btn btn-dark'>Starred</button>
                                        <button onClick={() => {
                                            addBugToFavourite(bugReport.id)
                                        }} disabled={loading || bugFavorites} className='btn btn-dark ms-3'>Favourites</button>
                                        <button onClick={() => {
                                            generateBugReference(bugReport.id)
                                        }} disabled={loading} className='btn btn-dark mx-3'>References</button>
                                    </div>
                                </div>
                                {bugNative !== null && (
                                    <>
                                        <p className='text-black fs-5 fw-bolder mt-4 mb-2'>Sinhala</p>
                                        <div className="p-2 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                            <div dangerouslySetInnerHTML={{ __html: bugNative.sinhala }} />
                                            <div className="d-flex justify-content-end align-items-center">
                                            </div>
                                        </div>

                                        <p className='text-black fs-5 fw-bolder mt-4 mb-2'>Tamil</p>
                                        <div className="p-2 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                            <div dangerouslySetInnerHTML={{ __html: bugNative.tamil }} />
                                            <div className="d-flex justify-content-end align-items-center">
                                            </div>
                                        </div>
                                    </>
                                )}
                                {
                                    bugReference !== null ? (
                                        <>
                                            <p className='text-black fs-5 fw-bolder mt-4 mb-2'>Bug References </p>
                                            <div className="p-2 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                                <div dangerouslySetInnerHTML={{ __html: bugReference.html }} />
                                            </div>
                                        </>
                                    ) : ('')
                                }
                                <p className='text-black mt-4 fs-2 text-start fst-italic'>Whether you're a beginner or an experienced coder, CODEX streamlines the debugging process, saving you time and effort while ensuring optimal code performance. Experience the power of CODEX and elevate your coding experience today!</p>
                                <div className="d-flex justify-content-end align-items-center">
                                    <p className='text-success fw-bolder me-3'>Trusted by millions</p>
                                    <p className='text-danger fw-bolder'>Secured Data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
