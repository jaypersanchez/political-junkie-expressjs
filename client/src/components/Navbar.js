import React, {useState} from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
    const profile_fullname = localStorage.getItem("screen_name")
    
    function signOut(e) {
        e.preventDefault()
        localStorage.clear()
    }

    
    return (
        <div>
            <nav className="navbar navbar-expand-lg p-2 navbar-light bg-light">
            <Link className="navbar-brand" to="/" onClick={(e)=>signOut}>[ Signout ]</Link>
            <p>{profile_fullname}</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/posts">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/createnewgroup">Create New Group <span className="sr-only">(current)</span></Link>
                </li>
                </ul>
            </div>

            </nav>
        </div>
    )
}

export default Navbar
