import React from 'react'

export default function GettingStarted() {
    return (
        <div className="overflow-scroll overflow-x-hidden" style={{ flex: 1 }}>
            <div className="h-100 w-100 shadow-sm" >
                <div className="row h-100">
                    <div className="col-12 rounded">
                        <div className="card p-3 shadow-sm mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <h1 className='fw-bolder'>Getting Started</h1>
                                <h3>✨</h3>
                            </div>
                            <p className='text-black fs-6'><span className='text-bg-dark fst-italic'>CODEX</span> is an advanced user-friendly code debugger tool which makes coding easier and takes it to the next level.</p>
                            <p className='text-black fs-5'>Follow these steps to continue:</p>
                            <ul className="list-group list-group-flush rounded">
                                <li className='list-group-item'>1. Simply type or paste your code.</li>
                                <li className='list-group-item'>2. Choose the desired programming language you are using.</li>
                                <li className='list-group-item'>3. Our advanced code editor shows syntactical errors for the code you are entering.</li>
                                <li className='list-group-item'>4. Need more support? Click on the <button class="btn btn-danger btn-sm">Analyze Error</button>.</li>
                                <li className='list-group-item'>5. And we've got you covered with your bug.</li>
                                <li className='list-group-item'>6. You could simply generate the bug issue in your native language for further clarifications.</li>
                                <li className='list-group-item'>7. We do include references which would help understand the bug more precisely.</li>
                                <li className='list-group-item'>8. Need more help? Contact us through our live 24/7 chat bot.</li>
                            </ul>
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
