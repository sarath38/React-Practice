import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Fstapp from '../src/Components/Lab1/Component/Firstapp/Fstapp';
import Secondapp from '../src/Components/Lab1/Component/Secondapp/Secondapp';
import Header from '../src/Components/Lab2/Components/Header/Header';
import Menu from '../src/Components/Lab2/Components/Menu/Menu';
import Body from '../src/Components/Lab2/Components/Body/Body';
import Footer from '../src/Components/Lab2/Components/Footer/Footer';
import NavComp from './Components/Lab3/Components/NavComp/NavComp';
import Card from '../src/Components/Lab3/Components/Card/Card'
import Form from './Components/Lab4/Components/Form/Form';
import Storage from '../src/Components/Lab4/Components/Form/Storage'
import FormChange from './Components/Lab4/Components/FormChange/FormChange'
import AxiosComp from './Components/Lab5/Components/Axios/AxiosComp'
import Axios1 from './Components/Lab5/Components/Axios1/Axios1'
import Home from './Components/Lab6/Home/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import User from './Components/Lab6/User/User'
import Post from './Components/Lab6/Post/Post'
import Comments from './Components/Lab6/Comments/Comments'
import Counter from './Components/Lab7/Counter/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
         {/* <Fstapp />
         <Secondapp /> 
         <Header />
         <Menu />
         <Body />
         <Footer /> 
         
          <div className="container">
            <div className="row">              
                <div className="col-md-12">
                     <NavComp />
                </div>               
            </div>
         </div> 
        
          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <Card title="HTML 5" footer="Start Practice" img="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  </div>
                  <div className="col-md-3">
                      <Card title="CSS 3" footer="Get Started" img ="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  </div>
                  <div className="col-md-3">
                      <Card title="Java Script" footer="Commence Course" img="https://images.pexels.com/photos/6347962/pexels-photo-6347962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  </div>
                  <div className="col-md-3">
                      <Card title="Bootstrap" footer="Launch Course" img="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  </div>
              </div>
         </div> 

         <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Form />
                    <Storage />
                </div>
                <div className="col-md-4"></div>
            </div>
         </div>


         <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <FormChange />
                </div>
                <div className="col-md-4"></div>
            </div>
         </div>
        
        <AxiosComp />
        <Axios1 /> */}

        <Router>
            <Home />
            <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                <Route path="/user" component={User} />
                <Route path="/post" component={Post} />
                <Route path="/comment" component={Comments} />
            </Switch>
        </Router>

        {/* <Counter /> */}
      </div>
    )
  }
}

export default App


