import React, { Component } from 'react'
import Axios from 'axios'
import '../User/User.css'

class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }
    getDataFromServer = ()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response.data)
            this.setState({
                data:response.data
            })
        },(error)=>{

        })
    }
    render() {
        return (
            <div className="container mt-4">
                <h2 className="mt-5 mb-5">Users Component</h2>
            <div className="row">
                <button className="btn btn-info mb-5 ml-1" onClick={this.getDataFromServer}>Get Data From Server</button>
            </div>
            <div className="row mt-1 mb-5">
                {
                    this.state.data.length > 0 ?  
                        this.state.data.map(function(element,index){
                            return <div className="col-md-3">
                                        <div className="card axios mt-3">
                                            <div className="card-header bg-warning">
                                                <h4>User Information </h4>                                    
                                            </div>
                                            <div className="card-body bg-success text-white">
                                                <p><b>Name:</b> {element.name} </p>
                                                <p><b>Email:</b> {element.email} </p>
                                                <p><b>Company Name:</b> {element.company.name}</p>
                                            </div>
                                        </div>
                                    </div>
                        })

                     : <h4 className="text-danger">Data is not available</h4>
                }
            </div>
        </div>

        )
    }
}
export default User
