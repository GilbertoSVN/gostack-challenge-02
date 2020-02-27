import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, esse site é bem legal, não acham?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Gilberto VN',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: 'Muito massa!'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Julio Alcantara',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, esse site é bem legal, não acham?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Gilberto VN',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: 'Muito massa!'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div class="postlist">
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            author={post.author}
            date={post.date}
            content={post.content}
            comments={post.comments}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
