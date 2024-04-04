import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import {  useSelector } from 'react-redux';

const CreateForum = () => {
    const [formData, setformData] = useState({});
    const { currentUser } = useSelector((state) => state.user);
    const handleChange = (e) =>{
        setformData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setformData({
            ...formData,
            "user": currentUser._id,
            "name" : currentUser.name
        });
        console.log(formData);
        try {
            const res = await axios.post(backendUrl+'/api/resources/createResource', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.data;
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <Navbar />
    <div className='flex items-center justify-center'>
        <form className='  inline-block px-4 py-3 w-full' onSubmit={handleSubmit}>
            <div>
                <p>Title</p>
                <input type='text' className='w-full rounded-lg border px-2 py-1' name="title" onChange={handleChange} value={formData.value} />
            </div>
            <div>
                <p>Description</p>
                <textarea className='w-full rounded-lg border p-2' type='text' name="description" onChange={handleChange} value={formData.value} />
            </div>
            <br />
            <input className='button' type='submit' value={"Create"} />
        </form>
    </div>
    </>
  )
}

export default CreateForum