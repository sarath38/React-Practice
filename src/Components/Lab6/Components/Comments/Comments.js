import React, { Component } from 'react'
import Axios from 'axios'
import '../Comments/Comments.css'

class Comments extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }
    getDataFromServer = ()=>{
        Axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
            console.log(response.data)
            this.setState({
                data:response.data
            })
        },(error)=>{alert("Error")

        })
    }
    render(){
        return <div mt-5>
            <h2 className="mt-5 mb-5">Comments Component</h2>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 input">
                    <p>
                        <button className="btn btn-success mb-5 ml-1" onClick={this.getDataFromServer}>Submit</button>
                    </p>
                </div>
                <div className="col-md-4"></div>
            </div>
            <table className="mt-1 mb-5">
                <tr>
                    <th style={{
                        border: 'solid 3px blue',
                        background: 'green',
                        color: 'white',
                        padding: '10px',
                        fontWeight: 'bold',
                        }}>Name
                    </th>                        
                    <th style={{
                        border: 'solid 3px blue',
                        background: 'green',
                        color: 'white',
                        padding: '10px',
                        fontWeight: 'bold',
                        }}>Email
                    </th>
                    <th style={{
                        border: 'solid 3px blue',
                        background: 'green',
                        padding: '10px',
                        color: 'white',
                        fontWeight: 'bold',
                        }}>Body
                    </th>
                </tr>
                {
                    this.state.data.length > 0 ?  
                        this.state.data.map(function(element,index){
                            return <tr style={{
                                        background: 'grey',
                                        padding: '10px',
                                        color: 'white',                                       
                                        }}>
                                        <td className="mt-3">{element.name}</td>
                                        <td className="mt-3">{element.email}</td>
                                        <td className="mt-3">{element.body}</td>
                                    </tr>
                                 })
                     : <h4></h4>
                }
            </table>
        </div>
    }
}
export default  Comments
