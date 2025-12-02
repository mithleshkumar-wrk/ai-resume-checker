import React from 'react'
import ResumeSection from '../components/ResumeSection'

const Home = () => {
    return (
        <div className='bg-linear-to-br from-blue-50 via-purple-50 to-pink-50  flex flex-col'>

            <div className='flex flex-col justify-center items-center pt-8'>
                <p className='text-xl font-medium text-gray-900 text-center'>Get AI-Powered Critique on Your Resume</p>
                <p className='text-gray-600 mt-4 md:w-2xl text-center px-3 md:px-0'>Upload your resume or paste the text below to receive detailed feedback, improvement suggestions, and actionable insights to make your resume stand out.</p>
            </div>

            <ResumeSection/>

        </div>
    )
}

export default Home