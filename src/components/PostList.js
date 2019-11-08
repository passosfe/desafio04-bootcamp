import React, { Component } from "react";
import { format } from "date-fns";

import PostItem from "./PostItem";

import avatar from "../assets/profile.jpeg";

class PostList extends Component {
  state = {
    newPost: "",
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: avatar
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: avatar
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: avatar
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: avatar
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar: avatar
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: avatar
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  //componentDidUpdate(_, )

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (submit) => {
    submit.preventDefault();

    const { posts } = this.state;

    const newPost = {
      id: posts[posts.length - 1].id + 1,
      author: {
        name: "Julio Alcantara",
        avatar: avatar
      },
      date: format(new Date(), "MMMM dd yyyy"),
      content: this.state.newPost,
      comments: []
    };

    this.setState({
      posts: [...posts, newPost],
      newPost: ""
    });
  };

  render() {
    return (
      <div className="post-list">
        <form className="card" onSubmit={this.handleSubmit}>
          <textarea
            rows="4"
            cols="50"
            name="newPost"
            placeholder="What are you thinking about?"
            value={this.state.newPost}
            onChange={this.handleInputChange}
          />
          <button type="submit">
            <i className="material-icons">send</i>
          </button>
        </form>
        {this.state.posts.map((item) => (
          <PostItem key={item.id} data={item} />
        ))}
      </div>
    );
  }
}

export default PostList;
