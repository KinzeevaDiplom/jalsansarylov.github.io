import React from "react";
import CommentItem from "./CommentItem";

const Comment = (props) => {
  let textareaEl = React.createRef();

  let addComment = () => {
    props.dispatch({ type: "ADD-COMMENT" });
  };

  let onPostChenge = () => {
    let text = textareaEl.current.value;
    props.dispatch({ type: "UPDATE-TEXT-ELEMENT", text: text });
  };

  let commentsElement = props.commentsD.map((comment) => (
    <CommentItem
      name={comment.name}
      key={comment.id}
      text={comment.text}
      imgId={comment.imgId}
    />
  ));

  return (
    <div>
      <div className="comments">{commentsElement}</div>
      <div className="add-comment">
        <textarea
          onChange={onPostChenge}
          ref={textareaEl}
          value={props.newTextPost}
        ></textarea>
        <button onClick={addComment}>добавить коментарий</button>
      </div>
    </div>
  );
};

export default Comment;
