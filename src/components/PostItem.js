import React from "react";

function Post({ author, date }) {
  return (
    <div className="post-header">
      <img src={author.avatar} width="100px" className="avatar" />
      <div className="info">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function Comment({ data }) {
  const { author, content } = data;
  return (
    <div className="comment">
      <img src={author.avatar} className="avatar" />
      <div className="comment-content">
        <p>
          <span>{author.name}</span>
          {content}
        </p>
      </div>
    </div>
  );
}

function PostItem({ data }) {
  const { author, date, content, comments } = data;

  return (
    <div className="card">
      <Post author={author} date={date} />
      <p className="content">{content}</p>
      <div className="divider" />
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

export default PostItem;
