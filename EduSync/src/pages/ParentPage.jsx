import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ParentPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const id = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/parent/getAllcourses/${currentUser._id}`);
        const data = res.data;
        setCourses(data);
      } catch (err) {
        console.log("Cannot get courses");
      }
    };
    getCourse();
  }, []);

  return (
    <>
      <Navbar />
      <div className='p-3 '>
      <div className='grid grid-cols-3 gap-4 '>
        {courses.map((course, index) => (
          <div key={index} className='flex flex-col bg-blue-300 rounded-lg p-4'>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default ParentPage;
