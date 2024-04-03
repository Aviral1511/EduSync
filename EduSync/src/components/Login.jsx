import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice"

const Login = () => {
    const { loading, error,currentUser } = useSelector((state) => state.user);
    // const { } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [mode, setmode] = useState('parent');
    const [formdata1, setformdata1] = useState({
        email: '',
        password: '',
    });
    const [formdata2, setformdata2] = useState({
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

    const handleParentLogin = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(backendUrl+'/api/parent/login', formdata1, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.data;
            dispatch(signInSuccess(data));
            console.log("data is : ", data)
            console.log(res)
            navigate("/parent")
        } catch (error) {
            console.error(error);
        }
    }

    const handleTeacherLogin = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(backendUrl+'/api/teacher/login', formdata2, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.data;
            dispatch(signInSuccess(data));
            console.log("data is : ", data)
            console.log(res)
            navigate('/teacher')
        } catch (error) {
            console.error(error);
        }
    }
if(currentUser) console.log("currentUser is : ", currentUser);

  return (
    <div className='flex justify-center items-center' style={{minHeight:"100vh"}}>
    <div className=' bg-blue-300 w-80 px-2 py-4 rounded-2xl min-h-full '>
        <div>Login</div>
        <br />
        <div className='flex justify-center'>
            <button className=' bg-green-200 px-2' onClick={()=>setmode('parent')}>login as Parent</button>
            <div className=' bg-slate-400 w-1'></div>
            <button className=' bg-green-200 px-2' onClick={()=>setmode('teacher')}>login as teacher</button>
        </div>
        <br/>
        <div>
            {(mode=='parent')?
            <div className=' '>
                Logging in as Parent.  <br /> <br />
                <form className='flex flex-col gap-2 ' onSubmit={handleParentLogin}>
                    <div>
                        <input type='email' name='email' value={formdata1.email} onChange={handleChangeParent} placeholder='Enter the email.' />
                    </div>
                    <div>
                        <input type='password' name='password' value={formdata1.password} onChange={handleChangeParent} placeholder='Enter your Password.' />
                    </div>
                    <div>
                        <input className='button' type='submit' value={'Login'} />
                    </div>
                </form>
            </div>
            :<div>
                Logging in as Teacher. <br /> <br />
                <form className='flex flex-col gap-2' onSubmit={handleTeacherLogin}>
                    <div>
                        <input type='email' name='email' value={formdata2.email} onChange={handleChangeTeacher} placeholder='Enter the email.' />
                    </div>
                    <div>
                        <input type='password' name='password' value={formdata2.password} onChange={handleChangeTeacher} placeholder='Enter your Password.' />
                    </div>
                    <div>
                        <input className='button' type='submit' value={'Login'} />
                    </div>
                </form>
            </div>}
        </div>
    </div>
    </div>
    
  )
}

export default Login