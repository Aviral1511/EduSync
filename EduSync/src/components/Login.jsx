import React from 'react'
import { useState } from 'react';


const Login = () => {
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

    const handleParentLogin = async ()=>{
        e.preventDefault();
        try {
            const res = await axios.get(backendUrl+'/api/auth/parent/login', formdata, {
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

    const handleTeacherLogin = async ()=>{
        e.preventDefault();
        try {
            const res = await axios.post(backendUrl+'/api/auth/teacher/login', formdata, {
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
        <div>Login</div>
        <button onClick={()=>setmode('parent')}>login as Parent</button>
        <button onClick={()=>setmode('teacher')}>login as teacher</button>
        <div>
            {(mode=='parent')?
            <div>
                Login as parent
                <form className='flex flex-col ' onSubmit={()=>handleParentLogin()}>
                    <div>
                        <input type='email' name='email' value={formdata1.email} onChange={handleChangeParent} placeholder='Enter the email.' />
                    </div>
                    <div>
                        <input type='password' name='password' value={formdata1.password} onChange={handleChangeParent} placeholder='Enter your Password.' />
                    </div>
                    <div>
                        <input type='submit' value={'Login'} />
                    </div>
                </form>
            </div>
            :<div>
                Login as Teacher
                <form className='flex flex-col ' onSubmit={()=>handleTeacherLogin()}>
                    <div>
                        <input type='email' name='email' value={formdata2.email} onChange={handleChangeTeacher} placeholder='Enter the email.' />
                    </div>
                    <div>
                        <input type='password' name='password' value={formdata2.password} onChange={handleChangeTeacher} placeholder='Enter your Password.' />
                    </div>
                    <div>
                        <input type='submit' value={'Login'} />
                    </div>
                </form>
            </div>}
        </div>
    </div>
    </>
    
  )
}

export default Login