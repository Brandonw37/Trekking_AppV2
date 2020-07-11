import React from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios'
import {store} from '../../index';
import {action} from '../Redux/Actions/Auth';


export default new class Auth extends React.Component {
    constructor (props){
        super(props);
        this.state = {
        authenticated: false
    }}

    componentDidMount() {
        axios.get('http://localhost:8080/api/v1/auth/success', {
            withCredentials: true
        })
        .then(response => {
            store.dispatch(action(true))
            console.log(response.message)
        })
        .catch(err => {
            store.dispatch(action(false))
            console.log('failed to authenticate')
        })
    }
render() {
    return(
        <div></div>
    )
}
}
