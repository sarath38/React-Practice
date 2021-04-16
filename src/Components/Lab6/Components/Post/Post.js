import React, { Component } from 'react'
import Axios from 'axios'
import '../Post/Post.css'

class Post extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }
    getDataFromServer = ()=>{
        this.nameRef = this.refs.name
        this.passwordRef = this.refs.password

        console.log(this.nameRef.value)
        console.log(this.passwordRef.value)

        Axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response.data)
            this.setState({
                data:response.data
            })
        },(error)=>{alert("Error")

        })
    }
    render(){
        return <div mt-5>
            <h2 className="mt-5 mb-4">Posts Component</h2>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 input">
                <p className="formgroup">
                    <input className ="form-control" ref="name" placeholder="User Name" type="text" />
                </p>
                <p className="formgroup">
                    <input className ="form-control" ref="password" placeholder="Password" type="password" />
                </p>
                <p>
                    <button className="btn btn-success mb-5 ml-1" onClick={this.getDataFromServer}>Submit</button>
                </p>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-1 mb-5  posts">
                {
                    this.state.data.length > 0 ?  
                        this.state.data.map(function(element,index){
                            return <div className="col-md-3">
                                <div className="card posts mt-3">
                                    <div className="card-header bg-warning">
                                        <h4 className="text-info">Hello</h4>
                                    </div>
                                    <div className="card-body posts bg-success text-white">
                                        <p><b>ID:</b> {element.id}</p>
                                        <p><b>Title:</b> {element.title}</p>
                                        <p><b>Body:</b> {element.body}</p>
                                    </div>
                                </div>
                            </div>
                        })

                     : <h4></h4>
                }
            </div>
        </div>
    }


}
export default  Post
