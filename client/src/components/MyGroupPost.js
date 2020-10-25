/*
* This component represents a post within the Mygroup component.  This component will show as individual card
* and contiain the message or any links and comments/replies to comments.  
*/
import React, {useState, useEffect} from 'react'
import NavBar from './Navbar'
import Post from './Post'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'

function MyGroupPost(props) {

    let postgroupid = props.location.postgroupid
    let groupname = props.location.groupname
    let properties = {
        _postgroupid:postgroupid,
        _groupname:groupname
    }
    //console.log(`postgroupid::${postgroupid}`)

    return (
        <div>
            <NavBar />
            <Post {...properties} />
        </div>
    )
}

export default MyGroupPost
