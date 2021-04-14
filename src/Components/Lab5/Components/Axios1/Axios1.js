import React from 'react'
import Axios from 'axios'
import '../Axios1/Axios1.css'

class Axios1 extends React.Component{
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
            <h2>Form-Posts</h2>
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
                    <button className="btn btn-info mb-5 ml-1" onClick={this.getDataFromServer}>Submit</button>
                </p>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row mt-1 mb-5">
                {
                    this.state.data.length > 0 ?  
                        this.state.data.map(function(element,index){
                            return <div className="col-md-12">
                                <div className="posts">
                                    <p><b>ID:</b> {element.id}</p>
                                    <p><b>Title:</b> {element.title}</p>
                                    <p><b>Body:</b> {element.body}</p>
                                    
                                </div>
                            </div>
                        })

                     : <h4></h4>
                }
            </div>
        </div>
    }


}
export default Axios1