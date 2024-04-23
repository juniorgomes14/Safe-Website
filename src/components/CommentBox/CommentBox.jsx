import React from "react";
import "./CommentBox.css";
import starImage from "../../assets/yellow_start.png";

const CommentBox = () => {
  return (
    <div className="comment-container">
      <div className="starts">
        <img src={starImage} alt="comment-star" />
        <img src={starImage} alt="comment-star" />
        <img src={starImage} alt="comment-star" />
        <img src={starImage} alt="comment-star" />
      </div>
      <p className="comment-name">Nome da pessoa</p>
      <p className="comment-description">
        esse é um comenatrio deixado por alguem esse é um comenatrio deixado por
      </p>
    </div>
  );
};

export default CommentBox;
