import React from 'react'

class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return<div>
            <div className="card mt-4">
                {/* <div className="card-header">{this.props.title}</div> */}
                {/* <div className="card-header">
                    <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%"/>
                </div> */}
                <div className="card-header">
                    <img src={this.props.img} width="100%" />
                </div>
                <div className="card-body"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam quod praesentium repellat iusto molestiae odio libero dolore, cupiditate temporibus.</p></div>
                <div className="card-footer">{this.props.footer}</div>
            </div>
        </div>
    }
}
export  default Card
