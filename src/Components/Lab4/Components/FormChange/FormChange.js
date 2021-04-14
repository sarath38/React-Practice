import React from 'react'

class FormChange extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             password:'',
             email:'',
             address:''
        }
    }

    Details = ()=>{
        // console.log(this.state.name)
        // console.log(this.state.password)
        // console.log(this.state.email)
        // console.log(this.state.address)

        var nameRef = this.refs.name
        var passwordRef = this.refs.pwd
        var emailIdRef = this.refs.email
        var addressRef = this.refs.add
            nameRef.innerHTML = this.state.name
            passwordRef.innerHTML = this.state.password
            emailIdRef.innerHTML = this.state.email
            addressRef.innerHTML = this.state.address
    }
    render(){
        return <div>
        <div className="formgroup mt-5 mb-5">
            <h2 className="mb-3">Register Form (FormChange)</h2>
            <p className="formgroup">            
                <input  onChange={(event)=>{this.setState({name:event.target.value})}} type="text" className="form-control" placeholder="User Name" /></p>
            <p className="formgroup">                
                <input  onChange={(event)=>{this.setState({password:event.target.value})}} type="password" className="form-control" placeholder="Password" /></p>
            <p className="formgroup">            
                <input  onChange={(event)=>{this.setState({email:event.target.value})}} type="email" className="form-control" placeholder="Email" /></p>
            <p className="formgroup">
                <textarea  onChange={(event)=>{this.setState({address:event.target.value})}} type="text" className="form-control" placeholder="Address" ></textarea></p>
            <button className="btn btn-primary mt-1" onClick={this.Details}>Submit </button>

            <h2 ref="name"></h2>
            <h2 ref="pwd"></h2>
            <h2 ref="email"></h2>
            <h2 ref="add"></h2>
        </div>
        </div>
    }

}

export default FormChange