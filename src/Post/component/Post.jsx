import React, { Component } from 'react';
import './assets/Post.css';

const Post = (props) => (
    <div className="panel panel-default post-body">
        <div className="panel-body">
            { props.postBody.map((postPart, idx) => {

                <div>test</div>
                
                console.log(postPart);
                // postPart
            }) }
        </div>
    </div>
);

export default Post;