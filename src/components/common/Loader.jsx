import React from 'react'
import { HashLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='flex flex-col gap-2 h-screen  items-center '>
        <HashLoader className='mt-32 ' color="#0800ff" />
        <p>Please wait, evaluating your resume…</p>
    </div>
  )
}

export default Loader