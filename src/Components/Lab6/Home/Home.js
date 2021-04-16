import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../Home/Home.css'

class Home extends Component {
    render() {
        return (
            <div classname="mb-5">
                <nav>
                    <div className="navbar navbar-dark bg-info">
                        <a href="#" className="navbar-brand text-center">Welcome to A2N Academy!</a>
                    </div>
                </nav>
                <div className="text-right bg-warning py-1">
                    <Link to="/" className="mx-5 text-white navbar-brand">Home</Link>
                    <Link to="/user" className="mx-5 text-white navbar-brand">Users</Link>
                    <Link to="/post" className="mx-5 text-white navbar-brand">Posts</Link>
                    <Link to="/comment" className="mx-5 text-white navbar-brand">Comments</Link>
                </div>
                <div className="Home mt-5 mb-5">
                    <h2 className="text-primary">Welcome to React World !!!</h2>
                </div>
            </div>
        )
    }
}
export default Home
