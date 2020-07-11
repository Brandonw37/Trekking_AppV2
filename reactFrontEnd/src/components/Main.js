import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Auth from './Authorization/isAuth'
import {store} from '../index';
import {action} from './Redux/Actions/Auth';

export default class Main extends React.Component {
    constructor (props){
        super(props);
        this.state = {
        joined: '',
        setJoined: ''
    }}



    join = (e) => {
        e.preventDefault();
        if (this.state.joined !== "") {
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            this.props.history.push(`/thanks/${this.state.joined}`, date);
        }
    }
render() {
        axios.get('http://localhost:8080/api/v1/auth/success', {
            withCredentials: true
        })
        .then(response => {
            store.dispatch(action(response.data.success))
            console.log(response.data.message)
        })
        .catch(err => {
            store.dispatch(action(false))
            console.log('failed to authenticate User')
        })
    return (
        <React.Fragment>
            <header>

                <div>
                    <h1>We design &amp; create <br /> trekking trips.</h1>
                    <p>Get away from the hustle and bustle of city life, explore what the nature has to offer. Trekking Team will let you know the destination, packing list. So jet off and explore nature! </p>
                    <Link to="/Login">Explore now</Link>
                </div>
                <img style={{
                    width: "100%",
                    height: "auto",
                    opacity: "0.3",
                }}
                    src="https://cdn.dribbble.com/users/1355613/screenshots/6441984/landscape.jpg" alt="" />

            </header>


            <main>
                <section className="services">
                    <h2>Why you should go on a trekking trip with Trekker?</h2>

                    <div className="service-container">
                        <div className="services-card service-one"></div>
                        <div className="service-description">

                            <h3>Reconnect with nature</h3>
                            <div>Trekker makes it easy to plan out your next outdoor adventure by giving you all the tools you need through a click of a button.</div>

                        </div>
                    </div>



                    <div className="service-container">
                        <div className="services-card service-two"></div>
                        <div className="service-description">
                            <h3><Link to="/packing">Know what to pack</Link></h3>
                            <div>Trekker cuts the hassle and prepares your backpack for you. So you can never leave unprepared!
</div>
                        </div>
                    </div>



                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Navigate Trails like a pro</h3>
                            <div>Trekker lets you see local trails around you and can even view points of interests and rest stops. </div>
                        </div>

                    </div>
                </section>

                <section>
                    <h2>Join our newsletter to get the latest trends.</h2>

                    <form className="newsletter" onSubmit={this.join}>
                        <input type="email" placeholder="Your email goes here" onChange={(e) => this.state.setJoined(e.target.value)} />
                        <input type="submit" value="Join Now!" />
                    </form>

                </section>
            </main>


        </React.Fragment>
    )}
}