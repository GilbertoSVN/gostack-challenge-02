import React from 'react';

function Comment({ author, content }) {
  return (
    <div class="comment">
      <img src={author.avatar} alt="Avatar" />
      <div class="content">
        <h2>{author.name}</h2>
        <p class="contentText">{content}</p>
      </div>
    </div>
  );
}

export default Comment;
