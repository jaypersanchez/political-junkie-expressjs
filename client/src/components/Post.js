import React,{useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import NavBar from './Navbar'
import axios from 'axios'

function Post(props) {
    let _postgroupid = props._postgroupid 
    let _groupname = props._groupname
    
    const [post, setpost]=useState([])
    
    
    useEffect(()=>{
        axios.get(`/posts?postgroupid=${_postgroupid}`)
        .then(
            res=>setpost(res.data),
            //res=>setpostgroupid(res.data.postgroupid),
            //res=>console.log(postgroupid)
        )
        .catch(err=>console.log(err))
    }) 
    
    const linkdata = {
        pathname:"/addpost",
        postgroupid:_postgroupid,
        groupname:_groupname
    }

    return (
        <div>
            <div> 
            <h3 className='bg-primary p-2 text-center'>{_groupname}</h3>
            <Link className="nav-link" to={linkdata}>Add Post<span className="sr-only">(current)</span></Link>
            </div>
            {
                post.map((data,key)=>(
                   <div className='container'>
                        <h2>{data.title}</h2>
                        <span className='badge badge-dart p-2'>Posted By -  {data.poster_screen_name} on {data.posted_date}</span>
                        <h6 className='text-white mt-4'>{data.desc}</h6>
                        <hr style={{border:'1pz dotted white'}} />
                   </div>
                ))
            }
        </div> 
    )   
}

export default Post
