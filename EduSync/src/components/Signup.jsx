import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    let backendUrl="http://localhost:4000";
    const [mode, setmode] = useState('parent');
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
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <>
    <div>
        <div>Signup</div>
        <button onClick={()=>setmode('parent')}>Signup as Parent</button>
        <button onClick={()=>setmode('teacher')}>Signup as teacher</button>
        <div>
            {(mode=='parent')?
            <div>
                Signup as Parent
                <form className='flex flex-col ' onSubmit={handleParentSignup}>
                    <div>
                        <input type='text' name='name' value={formdata1.name} onChange={handleChangeParent} placeholder='Enter the Name.' />
                    </div>
                    <div>
                        <input type='email' name='email' value={formdata1.email} onChange={handleChangeParent} placeholder='Enter the email.' />
                    </div>
                    <div>
                        <input type='password' name='password' value={formdata1.password} onChange={handleChangeParent} placeholder='Enter your Password.' />
                    </div>
                    <div>
                        <input type='submit' value={'Signup'} />
                    </div>
                </form>
            </div>
            :<div>
                Signup As Teacher
                <form className='flex flex-col ' onSubmit={handleTeacherSignup}>
                    <div>
                        <input type='text' name='name' value={formdata2.name} onChange={handleChangeTeacher} placeholder='Enter the Name.' />
                    </div>
                    <div>
                        <input type='email' name='email' value={formdata2.email} onChange={handleChangeTeacher} placeholder='Enter the email.' />
                    </div>
                    <div>
                        <input type='password' name='password' value={formdata2.password} onChange={handleChangeTeacher} placeholder='Enter your Password.' />
                    </div>
                    <div>
                        <input type='submit' value={'Signup'} />
                    </div>
                </form>
            </div>}
        </div>
    </div>
    </>
  )
}

export default Signup