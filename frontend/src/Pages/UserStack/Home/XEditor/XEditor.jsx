import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import { topLanguages } from '../../../../Utils/Constants/Languages/Languages';

export default function XEditor({handleFixErrorSubmit,loading}) {
    const [language, setLanguage] = useState('javascript'); // Initially set to 'plaintext'
    const [editorContent, setEditorContent] = useState('// Enter your code here')
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };
    const handleEditorChange = (value, event) => {
        setEditorContent(value);
    };
    
    return (
        <div className="me-4" style={{ flex: 1 }}>
            <div className="card h-100 p-3 w-100 shadow-sm">
                <div className="row h-100">
                    <div className='col-12 rounded p-0 d-flex flex-column'>
                        <div className="mb-3 flex-grow-1">
                            <Editor
                                theme="vs-light"
                                height="95%"
                                language={language} // Use the selected language 
                                defaultValue="// choose language and enter code" // Provide default content
                                value={editorContent}
                                onChange={handleEditorChange}
                                options={{ // Specify additional options
                                    wordWrap: 'on',
                                    fontSize: 15, // Set font size
                                    fontFamily: 'poppins', // Set font family
                                    minimap: { enabled: false }, // Disable minimap
                                    scrollbar: { vertical: 'visible', horizontal: 'hidden' }, // Hide scrollbar
                                    formatOnType: true, // Enable formatting on type
                                    formatOnPaste: true, // Enable formatting on paste
                                    formatOnSave: true, // Enable formatting on save
                                }}
                            />
                        </div>
                        {/* row 2 */}
                        <div className='d-flex justify-content-between align-items-center'>
                            <select disabled={loading} className='form-select' onChange={handleLanguageChange} value={language}>
                                {topLanguages.map(lang => (
                                    <option key={lang} value={lang}>{lang}</option>
                                ))}
                            </select>
                            <button disabled={loading} onClick={() => {
                                handleFixErrorSubmit(editorContent)
                            }} className='btn btn-danger w-100 ms-3'>Analyze Error</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
