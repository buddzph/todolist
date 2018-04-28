import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './assets/PostEditor.css';

export default class PostEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newPostBody: '',
        };

        this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    handlePostEditorInputChange(ev) {
        this.setState({
            newPostBody: ev.target.value
        })
    }

    createPost() {
        this.props.addPost(this.state.newPostBody);
        this.setState({
            newPostBody: '',
        });
    }

    render() {
        return (
            <div className="panel-body">
                <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange} />
                <Button bsStyle="primary" className="pull-right form-control post-editor-button" onClick={this.createPost}><i className="fas fa-arrow-right"></i> Post</Button>
            </div>
        )
    }
}