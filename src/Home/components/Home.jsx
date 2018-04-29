import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
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
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.details = this.details.bind(this);
        this.databaseRef = this.database.ref().child('todos');
        this.state = {
            todos: [],
            title: 'Simple React CRUD',
            counter: 0
        }
    }

    addTodo(e) {
        e.preventDefault();
        // console.log(this.refs);
        let name = this.refs.name.value;
        let completed = this.refs.completed.value;
        let counter = this.state.counter;
        
        let todo  = {
            name,
            completed,
            counter
        }
        counter+=1;
        let todos = this.state.todos;
        todos.push(todo);

        const postToSave = { todo };
        this.databaseRef.push().set(postToSave);

        this.setState({
            todos: todos,
            counter: counter
        });

        this.refs.todoForm.reset();
    }

    removeTodo(index) {
        console.log(index);
        let todos = this.state.todos;
        let todo = todos.find(function(todo) {
            return todo.counter === index
        });
        console.log(todo);
        // todos.splice(todo, 1);
        todos.splice(todos[index], 1);
        this.setState({
            todos: todos
        });
    }

    details(index) {
        let todos = this.state.todos;
        let todo = todos.find(function(todo) {
            return todo.counter === index
        });
    }

    render(){
        let title = this.state.title;
        let todos = this.state.todos;
        return (
            <Grid>
                <div className="top-space">&nbsp;</div>
                <Jumbotron>
                    <h2>{title}</h2>
                    <p>This is a simple web app that descibes how to make a simple CRUD application using React.</p>

                    <Row>
                        <Col>
                            <form ref="todoForm">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" ref="name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="completed">Completed</label>
                                    <input type="text" ref="completed" className="form-control" />
                                </div>
                                <Button bsStyle="primary" onClick={this.addTodo}><i className="far fa-save"></i> Add Todo</Button>
                            </form>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron>
                    <h2>Todo Items</h2>
                    <Row>
                        <Col>
                            <ul className="list-group">
                                {todos.map((todo => <li className="list-group-item" key={todo.counter}><div className="pull-right">{todo.completed}
                                <Button bsStyle="success" onClick={this.details.bind(null, todo.counter)} className="btnDetails"><i className="fas fa-eye"></i></Button>
                                <Button bsStyle="danger" onClick={this.removeTodo.bind(null, todo.counter)} className="btnRemove"><i className="far fa-trash-alt"></i></Button>
                                </div>{todo.name}</li>))}
                            </ul>
                        </Col>
                    </Row>
                </Jumbotron>
            </Grid>
        )
    }
}