import React, { Component } from 'react';

import Comment from './Comment';

function Post({ author, date, content, comments }) {
  return (
    <div class="post">
      <div class="author">
        <img src={author.avatar} alt="Avatar" />
        <div>
          <h1>{author.name}</h1>
          <p>{date}</p>
        </div>
      </div>
      <p>{content}</p>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          author={comment.author}
          content={comment.content}
        />
      ))}
    </div>
  );
}

export default Post;
