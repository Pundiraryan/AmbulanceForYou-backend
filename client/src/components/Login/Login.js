import React,{useState} from 'react';
import Banner from '../Banner/Banner';
import '../styles.css';
import { useHistory} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
const Login = () => {
    // const navigate=useNavigate();
    const history = useHistory();

    const onClickSignUpBtn = () => {
        history.push('/sign-up')
    }
    const [Email,setEmail]=useState('');
    const [Pwd,setPwd]=useState('');
    const handleClick=async ()=>{
        const data={
            email:Email,
            password:Pwd
        }
        const res =await Axios.post("http://localhost:5000/api/ambulance/auth/login",data);
    }

    return (
        <>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = 'col-lg-7 px-0'>
                        <Banner />
                    </div>
                    <div className = 'col-lg-5 px-0'>
                        <div className = 'login-container container d-flex justify-content-center'>
                           
                            <div className = 'row align-content-between align-items-center'>
                                <div className = 'col-lg-6'>
                                </div>
                                <div className = 'col-lg-6 d-flex justify-content-end'>
                                    <button className = 'btn custom-btn secondary' onClick = {onClickSignUpBtn}>Don't have an account?</button>
                                </div>
                                <div className = 'col-lg-12'>
                                    <h1 className = 'custom-text primary bold mb-4'>Login</h1>
                                    <form>
                                        <div className="form-group">
                                            <label >Email address</label>
                                            <input type="email" className="form-control" placeholder = 'Email Address' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder = 'Password' value={Pwd} onChange={(e)=>setPwd(e.target.value)}/>
                                        </div>
                                        <button type="button" className="btn btn-block custom-btn primary" onClick={handleClick}>Login</button>
                                    </form>
                                    
                                </div>
                                <div className = 'col-lg-12'>
                                    <p className ='d-flex justify-content-center custom-text secondary'>
                                        © AmbulanceForYou. 2050. All rights reserved.
                                    </p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Login;