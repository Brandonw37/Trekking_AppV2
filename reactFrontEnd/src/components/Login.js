import React from 'react';
import Group_3 from '../Group 3.svg';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import {store} from '../index';
import {action} from './Redux/Actions/Auth';
import GoogleOauth from './Oauth2';

export class Login extends React.Component {
    constructor(props) {
        super(props);
//        console.log(props)
        this.state = {
            email: '',
            password: '',
            results: {}
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange1 = event => {
        this.setState({ email: event.target.value });
    }
    handleChange2 = event => {
        this.setState({ password: event.target.value });
    }

    handleChange3 = () => {
        window.open('http://localhost:8080/api/v1/login/google', '_self')
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/api/v1/Login', {
            withCredentials: true,
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                this.setState({results: res.data})
                store.dispatch(action(this.state.results.success))
                if (this.state.results.success === true) {
                    alert((this.state.email) + ' you are logged in!');
//                    this.props.handleSubmit(this.state.results.success);
//                    console.log(this.state.email);
//                    console.log(this.state.results.success);
                    this.props.history.push('/Map');
                } else {
                    alert(this.state.results.message);
                }
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="contact" >
                    <h1>Trekker Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Login User</h3>

                        <h3>Login Email</h3>
                        <input type="text" email="email" onChange={this.handleChange1} />
                        <h3>Login Password</h3>
                        <input type="text" password="password" onChange={this.handleChange2} />
                        <button className="submit-btn" type="submit" >Submit</button>
                    </form>
                    <a className="submit-btn" onClick = {this.handleChange3} type="submit">Sign in with Google</a>
                    <Link className="submit-btn" to="/Register">Sign Up?</Link>
                    <img src={Group_3} alt="" />
                </div>
            </React.Fragment>
        )
    }
}