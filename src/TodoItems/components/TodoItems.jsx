import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FlipMove from 'react-flip-move';
import './assets/TodoItems.css';

export default class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        // you can put onClick inside li also
        return <li key={item.key}><Button onClick={() => this.delete(item.key)} type="submit" bsStyle="danger" className="pull-right c_button"><i className="far fa-trash-alt"></i></Button>{item.text}</li>
    }

    delete(key) {
        // console.log('key is: ' + key);
        this.props.delete(key);
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}