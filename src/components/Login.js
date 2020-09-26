import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setemail]=useState('')
    const [pass, setpass]=useState('')
    return (
        <div className='container'>
        <h2 className='m-5 text-center'>Login into MERN Project</h2>
            <form className='col-md-5 mx-auto'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter email" required />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" onChange={(e)=>{setpass(e.target.value)}} placeholder="Password" required />
                            </div>
                            
                            <button type="submit" className="btn btn-primary mb-5">Submit</button>
                            
            </form>
            <Link to='/register' style={{textDecoration:'none',color:'#000'}} className='text-center mt-5'><h5>👉 Not a member? Register Here 👈</h5></Link>
        </div>
    )
}

export default Login
