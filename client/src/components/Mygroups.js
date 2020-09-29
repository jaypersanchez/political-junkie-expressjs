
/*
* This component is the main landing page after login.  This list all the groups the individual belongs too
* Either they own the group or they belong to a group
*/
import React, {useState, useEffect} from 'react'
import NavBar from './Navbar'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'

function Mygroups() {
    let profile_id = localStorage.getItem('profile_id')
    const [group, setgroup]=useState([])
    
   useEffect(()=>{
        console.log(`profile_id ${profile_id}`)
        axios.get(`/getgroups?profile_id=${profile_id}`)
        .then(res=>setgroup(res.data))
        .catch(err=>console.log(err))
    })

    return (
        <div>
            <NavBar /> 
            <h3 className='bg-primary p-2 text-center'>Groups</h3>
            {
                group.map((data,key)=>(
                   <div className='container'>
                        <Link to='/mygrouppost' style={{textDecoration:'none',color:'#000'}} className='text-center mt-5'>{data.name}</Link>
                        <label>{data._id}</label>
                        <h6 className='text-white mt-4'>{data.no_members} Members</h6>
                        <hr style={{border:'1pz dotted white'}} />
                   </div>
                ))
            }
        </div>
    )
}

export default Mygroups
