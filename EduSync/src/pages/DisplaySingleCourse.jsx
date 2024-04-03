import React from 'react';
import { Link } from 'react-router-dom';

const DisplaySingleCourse = () => {
    return (
        <div className='h-screen mx-auto w-full mt-3 '>
            <div className='mx-auto flex gap-5 justify-around'>
                <Link to={'/assignment'} className='bg-blue-400 p-3 rounded-xl inline-block'>Assignment</Link>
                <Link to={'/announcement'} className='bg-blue-400 p-3 rounded-xl inline-block'>Announcement</Link>
            </div>
        </div>
    );
};

export default DisplaySingleCourse;
