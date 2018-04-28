import React, { Component } from 'react';
import './assets/Post.css';

const Post = (props) => (
    <div className="panel panel-default post-body">
        <div className="panel-body">
            {
                props.postBody.map((postPart, idx) => (
                    <div>{postPart}</div>
                ))
            }
        </div>
    </div>
);

export default Post;