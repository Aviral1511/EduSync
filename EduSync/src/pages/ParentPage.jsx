import React from 'react'
import Navbar from '../components/Navbar'
import ParentNav from '../components/ParentNav'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect ,useState} from 'react';

const ParentPage = () => {
  const id = useParams();
  const [course, setCourse] = useState([]);
  const { loading, error,currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get(`/api/course/getCourseByParentId/${id}`);
        console.log(res);
        const data = await res.data;
        setCourse(data);
        console.log(data);
      } catch (err) {
        console.log("cannot get market ");
      }
    };
    getCourse();
  }, []);

  return (
    <Navbar />
  )
}

export default ParentPage