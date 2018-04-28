import React, { Component } from 'react'
import ThreadDisplay from '../../ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';
import './assets/Home.css';
// import { base } from '../../base';

export default class Home extends Component {
    constructor(props) {
        super(props);

        const config = {
            apiKey: "AIzaSyCqaFSKyreyflua4tCVKVziNJaxlPpBhR8",
            authDomain: "react-simple-discussion.firebaseapp.com",
            databaseURL: "https://react-simple-discussion.firebaseio.com",
            projectId: "react-simple-discussion",
            storageBucket: "react-simple-discussion.appspot.com",
            messagingSenderId: "831714324900"
        }

        this.app = firebase.initializeApp(config);
        this.database = this.app.database();
    }

    render(){
        return (
            <ThreadDisplay database={this.database} />
        )
    }
}