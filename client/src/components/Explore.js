import React from 'react'
import Navbar from './Navbar'
export default function Explore({getAuth, setAuth}) {
    return (
        <div>
            <Navbar getAuth = {getAuth} setAuth = {setAuth}></Navbar>
            
        </div>
    )
}
