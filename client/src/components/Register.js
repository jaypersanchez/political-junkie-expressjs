import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Register() {
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [dob,setdob]=useState('')
    const [email, setemail]=useState('')
    const [pass, setpass]=useState('')
    const [screenname, setscreenname]=useState('')

    function Register(e) {
        let data = {
            firstname:firstname,
            lastname:lastname,
            dob:dob,
            email:email,
            password: pass,
            screenname: screenname
        }

        axios.post('/register',data)
        .then(resp=>{
            if(resp) {
                //history.pushState('/login')
                alert('Successfully registered.  Now Login')
            }
            else {
                alert('Failed to register')
            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='container'>
        <h2 className='m-5 text-center'>Register Account</h2>
            <form onSubmit={(e)=>Register(e)} className='col-md-5 mx-auto'>
                            <div className="form-group">
                                <label htmlFor="exampleInputFirstname1">First Name</label>
                                <input type="text" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} className="form-control" placeholder="First Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputLastname1">Last Name</label>
                                <input type="text" value={lastname} onChange={(e)=>{setlastname(e.target.value)}} className="form-control" placeholder="Last Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="example-date-input" className="col-5 col-form-label">Date of Birth</label>
                                <input className="form-control" type="date" value={dob} onChange={(e)=>{setdob(e.target.value)}} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputScreenName1">Nick Name</label>
                                <input type="text" value={screenname} onChange={(e)=>{setscreenname(e.target.value)}} className="form-control" placeholder="Nick Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} className="form-control" placeholder="Enter email" required />
                                 
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" value={pass} onChange={(e)=>{setpass(e.target.value)}} className="form-control" placeholder="Password" required />
                            </div>
                            
                            <button type="submit" className="btn btn-primary mb-5">Submit</button>
                            
            </form>
            <Link to='/' style={{textDecoration:'none',color:'#000'}} className='text-center mt-2'><h5>👉 Already a member? Login Here 👈</h5></Link>
        </div>
    )
}

export default Register
