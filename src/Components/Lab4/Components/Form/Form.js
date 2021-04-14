import React from 'react'
import '../Form/Form.css'


class Form extends React.Component{
    constructor(props){
        super(props)
    }
    Details = ()=>{
       this.nameRef = this.refs.name
       this.passwordRef = this.refs.pswd
       this.emailRef = this.refs.mail
       this.addressRef = this.refs.add


       console.log(this.nameRef.value)
       console.log(this.passwordRef.value)
       console.log(this.emailRef.value)
       console.log(this.addressRef.value)

        localStorage.setItem('name',this.nameRef.value)
        localStorage.setItem('pswd',this.passwordRef.value)
        localStorage.setItem('mail',this.emailRef.value)
        localStorage.setItem('add',this.addressRef.value)

       this.nameRef.value=''
       this.passwordRef.value=''
       this.emailRef.value=''
       this.addressRef.value=''
    }
    render(){
     return <div>
        <div className="formgroup mt-5 mb-5">
            <h2 className="mb-3">Registration Form</h2>
            <p><input ref="name" type="text" className="form-control" placeholder="User Name" /></p>
            <p><input ref="pswd" type="password" className="form-control" placeholder="Password" /></p>
            <p><input ref="mail" type="email" className="form-control" placeholder="Email" /></p>
            <p><textarea ref="add" type="text" className="form-control" placeholder="Address"></textarea></p>
            <button className="btn btn-primary mt-1" onClick={this.Details}>Submit </button>
        </div>
         
    </div>

    }
}
export default Form