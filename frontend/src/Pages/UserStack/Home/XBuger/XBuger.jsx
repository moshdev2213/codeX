import React from 'react'

export default function XBuger() {
    return (
        <>
            <div className="overflow-scroll overflow-x-hidden" style={{ flex: 1 }}>
                <div className="h-100 w-100 shadow-sm" >
                    <div className="row h-100">
                        <div className="col-12 rounded">
                            <div className="card p-3 shadow-sm mb-3">
                                <h1 className='fw-bolder'>Analyzed Record</h1>
                                <p className='text-black fs-6'>Analyzed Result is shown below. Please choose options that matches the needs</p>

                                <p className='text-black fs-5 fw-bold mb-2'>Bug Record</p>
                                <div className="p-2 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione, pariatur nihil corrupti quaerat sapiente deserunt ipsum laboriosam enim dicta asperiores neque id veritatis ipsa amet dignissimos distinctio ipsam nostrum? Odio dolorem laudantium reiciendis fugiat aperiam, vel, alias fugit, quo dolores architecto ut hic consequatur iste aliquid ullam. Sint voluptas sapiente possimus voluptatem molestiae, facilis, nisi iusto labore aspernatur, debitis pariatur ex? Eaque distinctio veniam quisquam sit, quo laborum culpa accusamus in ea tempore molestiae porro adipisci doloremque perferendis, debitis nesciunt fugiat rerum blanditiis, voluptatibus aperiam! Sed aliquid iure impedit quas! Aspernatur porro iure optio laborum consectetur odit molestiae quidem.</p>
                                    <div className="d-flex justify-content-end align-items-center">
                                        <button className='btn btn-warning'>To Native Language</button>
                                        <button className='btn btn-danger mx-3'>Favourites</button>
                                        <button className='btn btn-success'>Starred</button>
                                        <button className='btn btn-dark mx-3'>References</button>
                                    </div>
                                </div>

                                <p className='text-black fs-5 fw-bold mt-4 mb-2'>Bug References </p>
                                <div className="p-2 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione, pariatur nihil corrupti quaerat sapiente deserunt ipsum laboriosam enim dicta asperiores neque id veritatis ipsa amet dignissimos distinctio ipsam nostrum? Odio dolorem laudantium reiciendis fugiat aperiam, vel, alias fugit, quo dolores architecto ut hic consequatur iste aliquid ullam. Sint voluptas sapiente possimus voluptatem molestiae, facilis, nisi iusto labore aspernatur, debitis pariatur ex? Eaque distinctio veniam quisquam sit, quo laborum culpa accusamus in ea tempore molestiae porro adipisci doloremque perferendis, debitis nesciunt fugiat rerum blanditiis, voluptatibus aperiam! Sed aliquid iure impedit quas! Aspernatur porro iure optio laborum consectetur odit molestiae quidem.</p>
                                </div>

                                <p className='text-black fs-5 fw-bold mt-4 mb-2'>Native Language</p>
                                <div className="p-2 rounded" style={{ backgroundColor: '#f3f3f3' }}>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione, pariatur nihil corrupti quaerat sapiente deserunt ipsum laboriosam enim dicta asperiores neque id veritatis ipsa amet dignissimos distinctio ipsam nostrum? Odio dolorem laudantium reiciendis fugiat aperiam, vel, alias fugit, quo dolores architecto ut hic consequatur iste aliquid ullam. Sint voluptas sapiente possimus voluptatem molestiae, facilis, nisi iusto labore aspernatur, debitis pariatur ex? Eaque distinctio veniam quisquam sit, quo laborum culpa accusamus in ea tempore molestiae porro adipisci doloremque perferendis, debitis nesciunt fugiat rerum blanditiis, voluptatibus aperiam! Sed aliquid iure impedit quas! Aspernatur porro iure optio laborum consectetur odit molestiae quidem.</p>
                                    <div className="d-flex justify-content-end align-items-center">
                                        <button className='btn btn-warning'>Sinhala</button>
                                        <button className='btn btn-info mx-3'>Tamil</button>
                                    </div>
                                </div>

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
