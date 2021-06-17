import React from 'react'
import Navbar from './Navbar'
import Functions from './function/Functions'
export default function Explore({getAuth, setAuth}) {
    return (
        <div>
            <Navbar getAuth = {getAuth} setAuth = {setAuth}></Navbar>
            <Functions></Functions>
        </div>
    )
}
