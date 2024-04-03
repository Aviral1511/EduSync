import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signup = () => {
    let backendUrl="http://localhost:4000";
    const [mode, setmode] = useState('parent');
    const navigate =  useNavigate();
    const [formdata1, setformdata1] = useState({
        name:'',
        email: '',
        password: '',
    });
    const [formdata2, setformdata2] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleChangeParent = (e) => {
        setformdata1({
            ...formdata1,
            [e.target.name]: e.target.value,
        });
    };
    const handleChangeTeacher = (e) => {
        setformdata2({
            ...formdata2,
            [e.target.name]: e.target.value,
        });
    };

    const handleParentSignup = async (e)=>{
        e.preventDefault();
        try {
            console.log("form Data: " + formdata1)
            const res = await axios.post(backendUrl+'/api/parent/sign-up', formdata1, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.data;
            console.log("data is : ", data)
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }

    const handleTeacherSignup = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(backendUrl+'/api/teacher/sign-up', formdata2, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.data;
            console.log("data is : ", data)
            console.log(res)
            navigate('/login')
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='flex justify-center items-center' style={{minHeight:"100vh"}}>
    <div className=' bg-blue-300 w-80 px-2 py-4 rounded-2xl min-h-full '>
        <div>Signup</div>
        <br />
        <div className='flex justify-center'>
            <button className=' bg-green-200 px-2' onClick={()=>setmode('parent')}>Signup as Parent</button>
            <div className=' bg-slate-400 w-1'></div>
            <button className=' bg-green-200 px-2' onClick={()=>setmode('teacher')}>Signup as teacher</button>
        </div>
        <br/>
        <div>
            {(mode=='parent')?
            <div className=' '>
                Signing Up in as Parent.  <br /> <br />
                <form className='flex flex-col gap-2 ' onSubmit={handleParentSignup}>
                    <div>
                        <input type='text' name='name' value={formdata1.name} onChange={handleChangeParent} placeholder='Enter your name.' />
                    </div>
                    <div>
                        <input type='email' name='email' value={formdata1.email} onChange={handleChangeParent} placeholder='Enter the email.' />
                    </div>
                    <div>
                        <input type='password' name='password' value={formdata1.password} onChange={handleChangeParent} placeholder='Enter your Password.' />
                    </div>
                    <div>
                        <input className='button' type='submit' value={'Signup'} />
                    </div>
                </form>
            </div>
            :<div>
                Signing Up in as Teacher. <br /> <br />
                <form className='flex flex-col gap-2' onSubmit={handleTeacherSignup}>
                    <div>
                        <input type='text' name='name' value={formdata1.name} onChange={handleChangeTeacher} placeholder='Enter your name.' />
                    </div>
                    <div>
                        <input type='email' name='email' value={formdata2.email} onChange={handleChangeTeacher} placeholder='Enter the email.' />
                    </div>
                    <div>
                        <input type='password' name='password' value={formdata2.password} onChange={handleChangeTeacher} placeholder='Enter your Password.' />
                    </div>
                    <div>
                        <input className='button' type='submit' value={'Signup'} />
                    </div>
                </form>
            </div>}
        </div>
    </div>
    </div>
  )
}

export default Signup