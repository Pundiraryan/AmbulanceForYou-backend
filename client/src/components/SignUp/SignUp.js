import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Banner from '../Banner/Banner';
import '../styles.css';
import Axios from 'axios';

const SignUp = () => {
    const history = useHistory();

    const onClickLoginBtn = () => {
        history.push('/login')
    }
    const [Name,setName]=useState('');
    const [Email,setEmail]=useState('');
    const [Add,setAdd]=useState('');
    const [Phone,setPhone]=useState('');
    const [Pwd,setPwd]=useState('');
    const handleClick=async ()=>{
        // console.log('done');
        const data={
            name:Name,
            email:Email,
            contact:Phone,
            address:Add,
            password:Pwd
        }
        const res =await Axios.post("http://localhost:5000/api/ambulance/auth/signup",data);
    }
    return (
        <>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = 'col-lg-7 px-0'>
                        <Banner />
                    </div>
                    <div className = 'col-lg-5 px-0'>
                        <div className = 'sign-up-container container d-flex justify-content-center'>
                           
                            <div className = 'row align-content-between align-items-center'>
                                <div className = 'col-lg-6'>
                                </div>
                                <div className = 'col-lg-6 d-flex justify-content-end'>
                                    <button className = 'btn custom-btn secondary' onClick = {onClickLoginBtn}>
                                        Already have an account?
                                    </button>
                                </div>
                                <div className = 'col-lg-12'>
                                    <h1 className = 'custom-text primary bold mb-2'>Sign Up</h1>
                                    <form>
                                        <div className = 'form-group'>
                                            <label>Full Name</label>
                                            <input type="text" class="form-control" placeholder = 'Full Name' value={Name} onChange={(e)=>setName(e.target.value)}/>
                                        </div>
                                        <div className = 'form-group'>
                                            <label>Email Address</label>
                                            <input type="text" class="form-control" placeholder = 'Email Address' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                        <div className = 'form-group'>
                                            <label>Address</label>
                                            <input type="text" class="form-control" placeholder = 'Address' value={Add} onChange={(e)=>setAdd(e.target.value)}/>
                                        </div>
                                        <div className = 'form-group'>
                                            <label>Phone Number</label>
                                            <input type="text" class="form-control" placeholder = 'Phone Number' value={Phone} onChange={(e)=>setPhone(e.target.value)}/>
                                        </div>
                                        
                                        <div className = 'form-group'>
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder = 'Password' value={Pwd} onChange={(e)=>setPwd(e.target.value)}/>
                                        </div>
                                       
                                        <div className = 'form-group form-check'>
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label" >Agree to the <a href = '/' className = 'custom-text primary'>Terms of Use</a> and <a href= '/' className = 'custom-text primary'>Privacy Policy</a></label>
                                        </div>
                                        <button type="button" className="btn btn-block custom-btn primary" onClick={handleClick}>Sign Up</button>
                                    </form>
                                </div>
                                <div className = 'col-lg-12'>
                                    <p className ='d-flex justify-content-center custom-text secondary'>
                                        {/* insert your company name */}
                                        © [Your Company]. 2020. All rights reserved.
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

export default SignUp;