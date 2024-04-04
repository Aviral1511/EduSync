import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
const JoinCourse = () => {

    const { currentUser } = useSelector((state) => state.user);

    const [code, setCode] = useState('');
    const handleJoinCourse = async () => {
        const res = await axios.post(`http://localhost:4000/api/course/JoinCourseByCourseId/`, { courseId: code, studentId: currentUser._id })
        const data = await res.data;
        console.log(data);
    }
    return (
        <div className='w-full h-full mx-auto p-5 flex flex-row justify-center items-center'>
            <div className='w-[780px]  mx-auto flex flex-col gap-6'>

                <form className='flex flex-col gap-3 p-4 border-2 border-opacity-50 rounded-xl border-gray-600'>
                    <h1 className='text-3xl text-gray-900'>
                        Class code
                    </h1>
                    <p>
                        Ask your teacher for the class code, then enter it here.
                    </p>
                    <input className='border-gray-600 border-2 border-opacity-50 rounded-lg  w-fit p-4' value={code} placeholder='enter the code' onChange={(e) => { setCode(e.target.value) }}>

                    </input>
                    <button onClick={handleJoinCourse} className='bg-blue-400   rounded-lg  w-[15%] px-4 py-2 hover:transition-all duration-300 hover:scale-105 text-white'>
                        Join
                    </button>
                </form>
                <div className='mt-2 '>
                    <span className='font-semibold'>To sign in with a class code</span>
                    <ul className="list-disc pl-4">
                        <li>Use an authorized account</li>
                        <li>Use a class code with 5-7 letters or numbers, and no spaces or symbols</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default JoinCourse