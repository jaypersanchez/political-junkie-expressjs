/*
* This component is the main landing page after login.  This list all the groups the individual belongs too
* Either they own the group or they belong to a group
*/
import React, {useState, useEffect} from 'react'
import NavBar from './Navbar'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'

function MyAssociatedGroups() {
    let profile_id = sessionStorage.getItem('profile_id')
    const [group, setgroup]=useState([])
    const [postgroupid, setpostgroupid]=useState()
    
   useEffect(()=>{
        
        //get groups it owns
        axios.get(`/getpublicgroups`)
        .then(
            res=>setgroup(res.data),
            //res=>setpostgroupid(res.data.postgroupid),
            //res=>console.log(postgroupid)
        )
        .catch(err=>console.log(err))

        

    })

    return (
        <div>
            <NavBar /> 
            <h3 className='bg-primary p-2 text-center'>Public Groups</h3>
            {
                group.map((data,key)=>(
                   <div className='container'>
                        <Link to={{pathname: '/publicgrouppost', postgroupid:data._id, groupname:data.name}} style={{textDecoration:'none',color:'#000'}} className='text-center mt-5'>{data.name}</Link>
                        <label hidden="true">{data._id}</label>
                        <hr style={{border:'1pz dotted white'}} />
                   </div>
                ))
            }

            

        </div>
    )
}

export default MyAssociatedGroups
