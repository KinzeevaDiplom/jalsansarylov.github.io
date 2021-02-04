import React from "react";

const CommentItem = (props) => {
  return (
    <div className="comment-item">
      <div className="user-img">
        <img src={"img/" + props.imgId + ".jpg"} alt="" />
      </div>

      <div className="">
        <h2>{props.name}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default CommentItem;
