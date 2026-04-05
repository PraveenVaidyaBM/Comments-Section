import { useState } from "react";

export default function CommentItem(props) {
  const { comment, key,addNewReply } = props;
  const [showReply, setShowReply] = useState(false);
  const [showAddReply, setShowAddReply] = useState(false);

  const handleAddReply = () => {
    setShowAddReply(!showAddReply);
  };

  const handleReplies = (e) => {
    const newComment = e.target.value
    addNewReply(comment.id,newComment)
    setShowAddReply(false)
  };

  const handleKeyDown = (e) =>{
    if(e.keyCode == 13){
      handleReplies(e)
    }
  }

  return (
    <div className="comment-container" key={key}>
      <div className="comment-details">
        <div>{comment.comment}</div>
        <div className="controls">
          {comment.replies.length > 0 && (
            <span onClick={() => setShowReply(!showReply)}>View Reply</span>
          )}
          <span onClick={() => handleAddReply()}>Add Reply</span>
        </div>
      </div>
      {showReply &&
        comment.replies.map((replies) => {
          return <CommentItem comment={replies} key={replies.id} addNewReply={addNewReply}/>;
        })}
      {showAddReply && (
        <input
          className="reply-section"
          type="text"
          placeholder="add a reply"
          autoFocus
          onBlur={handleReplies}
          onKeyDown={handleKeyDown}
        />
      )}{" "}
    </div>
  );
}
