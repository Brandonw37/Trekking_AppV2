import React, {PropTypes, useState} from 'react';
import Group_3 from '../Group 3.svg';
import axios from 'axios';
import { Link, useHistory} from 'react-router-dom';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
        email: '',
        password: '',
        results: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1 = event => {
        this.setState({ email: event.target.value });
    }
    handleChange2 = event => {
        this.setState({ password: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();

        axios.post('http://localhost:8080/api/v1/Login', {
            email: this.state.email,
            password: this.state.password
         })
            .then(res => {
                this.setState({results: res.data})
                if (this.state.results.success === true) {
                alert((this.state.email) + ' you are logged in!');
//                this.props.handleSubmit(this.state.results);
                console.log(this.state.email);
                console.log(this.state.results.success);
                this.props.history.push('/map');
                } else {
                    alert(this.state.results.message);
                }
            })     
        }
        sendData = () => { 
            this.props.handleSubmit(this.state.results);
            console.log(this.props.handleSubmit)
        }

    render() {
        const sendData = () => { 
            this.props.handleSubmit(this.state.results);
            console.log(this.props.handleSubmit)
        }
        return (
            <React.Fragment>
            <div className="contact" >
                <h1>Trekker Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <PropsHandle parentResults={this.state.results.success}/>
                    <h3>Login User</h3>

                    <h3>Login Email</h3>
                    <input type="text" email="email" onChange={this.handleChange1} />
                    <h3>Login Password</h3>
                    <input type="text" password="password" onChange={this.handleChange2}/>
                    <button className="submit-btn" type="submit" >Submit</button>
                </form>
                <Link className="submit-btn" to="/Register">Sign Up?</Link>
                <img src={Group_3} alt="" />
            </div>
            </React.Fragment>
        )
    }
}

export default class PropsHandle extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(props)
        this.Submit = this.Submit.bind(this)
    }

    Submit = props => {
    props.call(props.parentResults);
    console.log(this.props.parentResults)
}
render() {
return(
 <div onSubmit={this.Submit}>
     {this.parentResults}
 </div>   
)
}
}
