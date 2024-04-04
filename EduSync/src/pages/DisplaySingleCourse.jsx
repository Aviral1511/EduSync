import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DisplaySingleCourse = () => {
    const [assignments, setAssignments] = useState([]);
    const { id } = useParams();

const [courseJoinId,setcourseJoinId] = useState();

    useEffect(() => {
        const getCourse = async () => {
            try {
                console.log(id);
                const res = await axios.get(`http://localhost:4000/api/course/getCourseByCourseId/${id}`);
                const data = await res.data;
                setcourseJoinId(data.courseId);
                console.log(data.courseId);

            } catch (err) {
                console.log(err.message);
            }
        }
        getCourse();
    }, []);



    return (
        <div>
            <Navbar />
            <div className='h-screen mx-auto w-full mt-3 '>
                <div className='mx-auto flex gap-5 justify-around'>
                    {/* <button onClick={fetchAssignments} className='bg-blue-400 p-3 rounded-xl inline-block'>Assignment</button> */}
                    <button className='bg-blue-400 p-3 rounded-xl inline-block'>Announcement</button>
                </div>
                <h1>Id of course : {courseJoinId}</h1>
                <div>
                    {/* Render fetched assignments here */}
                    <ul>
                        {assignments.map((assignment, index) => (
                            <li key={index}>{assignment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DisplaySingleCourse;
