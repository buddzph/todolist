import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/database';
import './assets/Home.css';
// import { base } from '../../base';

export default class Home extends Component {
    constructor(props) {
        super(props);

        const config = {
            apiKey: process.env.REACT_APP_FIREBASE_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
            databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
            storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
        }

        this.app = firebase.initializeApp(config);
        this.database = this.app.database();
    }

    render(){
        return (
            <Grid>
                <div className="top-space">&nbsp;</div>
                <Jumbotron>
                    <h2>Simple React CRUD</h2>
                    <p>This is a simple web app that descibes how to make a simple CRUD application using React.</p>
                    
                </Jumbotron>
            </Grid>
        )
    }
}