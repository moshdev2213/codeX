import React, { useEffect, useState } from 'react'
import GettingStarted from '../../../Components/GettingStarted/GettingStarted';
import XEditor from './XEditor/XEditor';
import XBuger from './XBuger/XBuger';

export default function Home() {
  
  return (
    <div className="body-wrapper  py-3 " style={{ marginLeft: '230px', height: '100%' }}>
      <div className="container h-100" style={{ maxWidth: 'none' }}>
        <div className="d-flex justify-content-between h-100">
          <XEditor/>
          <XBuger />
          {/* <GettingStarted/> */}
        </div>
      </div>
    </div>
  )
}
