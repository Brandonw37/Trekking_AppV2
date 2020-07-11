///* global gapi */

import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';

export default class OAuthorized extends React.Component {

    handleChange = (event) => {
        event.preventDefault();

        axios.get('http://localhost:8080/api/v1/auth', {
            withCredentials: true,
            method: 'get',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' }
        })
        .then (res =>{
            console.log(res.json)
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="contact" >
                    <h1>
                        hello
                </h1>
                    <p>
                        <button className="submit-btn" onClick={this.handleChange} type="button">button</button>
                    </p>
                </div>
            </React.Fragment>
        )
    }

}