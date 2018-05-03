import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import TodoItems from '../../TodoItems/components/TodoItems';
import 'firebase/database';
import './assets/Home.css';

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
        this.databaseRef = this.database.ref().child('todos');
        
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            title: 'Todo List',
            items: []
        };
    }

    addItem(e) {
        e.preventDefault(); 
        if(this._inputElement.value !== '') {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
            
            this.databaseRef.push().set({ newItem });
            
            this.setState((prevState) => {
                    return {
                        items: prevState.items.concat(newItem)
                    }
                }
            );
        }
        this._inputElement.value = '';
        // console.log(this.state.items);
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render(){
        return (
            <Grid>
                <div className="top-space">&nbsp;</div>
                <Jumbotron>
                    <h2>{this.state.title}</h2>
                    <p>This is a simple web app that descibes how to make a simple Todo List application using React.</p>
                    <Row>
                        <Col xs={12}>
                            <form onSubmit={this.addItem}>
                                <div className="form-group">
                                    <label htmlFor="todotext">Add Todo Here</label>
                                    <input type="text" ref={(a) => this._inputElement = a} className="form-control" />
                                </div>
                                <Button type="submit" bsStyle="primary"><i className="far fa-save"></i> Add Todo</Button>
                            </form>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron>
                    <h2>Todo Items</h2>
                    <Row>
                        <Col xs={12}>
                            <TodoItems entries={this.state.items} 
                                delete={this.deleteItem}
                            />
                        </Col>
                    </Row>
                </Jumbotron>
            </Grid>
        )
    }
}