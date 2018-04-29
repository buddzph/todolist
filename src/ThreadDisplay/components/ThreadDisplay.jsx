import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import Post from '../../Post/components/Post';
import PostEditor from '../../PostEditor/components/PostEditor';
import './assets/ThreadDisplay.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.databaseRef = this.props.database.ref().child('post');
        this.updateLocalState = this.updateLocalState.bind(this);
        this.addPost = this.addPost.bind(this);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        const { updateLocalState } = this;
        this.databaseRef.on('child_added', snapshot => {
            const response = snapshot.val();
            updateLocalState(response);
        })
    }

    addPost(postBody) {
        const postToSave = { postBody };
        this.databaseRef.push().set(postToSave);
    }

    updateLocalState(response) {
        const posts = this.state.posts;
        const brokenDownPost = response.postBody.split(/[\r\n]/g);
        posts.push(brokenDownPost);
        // console.log(posts);
        this.setState({
             posts: posts
        });
    }

    render() {
        return (
            <Grid>
                <div className="top-space">&nbsp;</div>
                <Jumbotron>
                    <h2>Simple Discussion Web App</h2>
                    <p>This is a simple web app that descibes how to make a simple discussion application. It is basically similar with chat which auto updates in a different browsers automatically.</p>
                    {
                        this.state.posts.map((postBody, idx) => {
                            return (
                                <Post key={idx} postBody={postBody} />
                            )
                        })
                    }
                    <PostEditor addPost={this.addPost} />
                </Jumbotron>
            </Grid>
        )
    }
}