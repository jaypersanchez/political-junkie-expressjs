import React,{useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import NavBar from './Navbar'
import axios from 'axios'

function Post(props) {
    let _postgroupid = props._postgroupid 
    const [post, setpost]=useState([])
    
    
    useEffect(()=>{
        axios.get(`/posts?postgroupid=${_postgroupid}`)
        .then(res=>console.log(_postgroupid))
        .then(res=>setpost(res.data))
        .then(()=>{
            axios.get(`/profile?email=${localStorage.getItem("email")}`)
            .then(res=>{
                localStorage.setItem("screen_name",res.data.screenname)
                localStorage.setItem("profile_id",res.data._id)
            })
            .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    }) 
    

    return (
        <div>
            <div> 
            <h3 className='bg-primary p-2 text-center'>Read All the Blogs Posted on the Board</h3>
            <Link className="nav-link" to="/addpost">Add Post<span className="sr-only">(current)</span></Link>
            </div>
            {
                post.map((data,key)=>(
                   <div className='container'>
                        <h2>{data.title}</h2>
                        <span className='badge badge-dart p-2'>{data.auth}</span>
                        <h6 className='text-white mt-4'>{data.desc}</h6>
                        <hr style={{border:'1pz dotted white'}} />
                   </div>
                ))
            }
        </div> 
    )   
}

export default Post
