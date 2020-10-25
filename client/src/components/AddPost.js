import React, {useState} from 'react'
import NavBar from './Navbar'
import axios from 'axios'
import {Link} from 'react-router-dom'

function AddPost(props) {

    let _postgroupid = props.location.postgroupid
    let groupname = props.location.groupname
    console.log(`_postgroupid:${_postgroupid} ${groupname}`)
    const [title, settitle]=useState('')
    const [auth,setauth]=useState('')
    const [desc,setdesc]=useState('')
    const [msg,setmsg]=useState('')
    let author = sessionStorage.getItem("profile_id")
    let screenname = sessionStorage.getItem("screen_name")
    //get current date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();

    function handleSubmit(e) {
        e.preventDefault()
        const blog = {
            desc:desc,
            poster_profile_id:author,
            poster_screen_name: screenname ,
            posted_date: `${mm}/${dd}/${yyyy}`,
            postgroupid: _postgroupid
        }

        axios.post('/addpost', blog)
        .then(res=>setmsg(res.data))
        .catch(err=>console.log(err))
    }
    
    return (
        <div>
           <NavBar /> 
           
            <div className='container mt-5'>
            <h2 className='m-5 text-center'>Say it out loud</h2>
                <form  className='col-md-6 mx-auto' onSubmit={handleSubmit}>
                <h5 className='p-3 text-center text-white'>{msg}</h5>
                                

                                <div className="form-group">
                                    <textarea 
                                    type="text" value={desc} 
                                    className="form-control" 
                                    onChange={(e)=>{setdesc(e.target.value)}}
                                    rows='8' 
                                    placeholder="What's your comment" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Post</button>
                                <Link to={{pathname: '/mygrouppost', postgroupid:_postgroupid, groupname:groupname}} className='btn btn-dark ml-4'>Back to Home</Link>
                </form>
                
            </div>
        </div>
    )
}

export default AddPost
