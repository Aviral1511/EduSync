import React, { useEffect, useState } from 'react'
import TeacherNav from '../components/TeacherNav'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 

const TeacherPage = () => {
  const {id}= useParams();
  // console.log(id);
  const [course, setCourse] = useState([]);
  const { loading, error,currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get(`/api/course/getCoursesByTeacherId/${id}`);
        const data = await res.data;
        console.log(data);
        setCourse(data);
      } catch (err) {
        console.log("cannot get market " , err);
      }
    };
    getCourse();
}, []);

  return (
    
    <div>
      <TeacherNav />
      {
        course.data && course.data.map((curr) => (
          <a className=" bg-blue-300 group flex flex-col gap-3 rounded-2xl p-5 duration-100 hover:bg-brand-amber-2"  
            href={`/getSingleCourse/${id}`} key={id}>
              <div className="w-full overflow-hidden rounded-xl">
                  <img src='#' alt='No img'
                  className="w-full  duration-100 group-hover:-0" />
              </div>
              <h1 className="flex justify-between text-2xl">{curr.title}</h1>
              <p>{curr.description}</p>
          </a>
        ))
      }
    </div>
    
  )
}

export default TeacherPage;