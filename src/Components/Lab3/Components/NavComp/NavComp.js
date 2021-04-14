import React from 'react'
import '../NavComp/NavComp.css'

class NavComp extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <nav className="nav bg-warning mt-4">
                <a href="#" className="navbar-brand ml-5">Home</a>
                <a href="#" className="navbar-brand ml-5">Services</a>
                <a href="#" className="navbar-brand ml-5">About Us</a>
                <a href="#" className="navbar-brand ml-5">Our Blogs</a>
                <a href="#" className="navbar-brand ml-5">Careers</a>
                {/* <a href="#" className="navbar-brand ml-5">Quick Enquiry</a> */}
                <a href="#" className="navbar-brand ml-5">contact Us</a>
            </nav>
        </div>
    }
}
export default NavComp 