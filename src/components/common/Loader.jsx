import React from 'react'
import { HashLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
        <HashLoader color="#0800ff" />
        <p>Please wait evaluating your resume</p>
    </div>
  )
}

export default Loader