import "../index.css";
import CommentItem from "./CommentItem";

export default function Comments({ comments,addNewReply }) {
  return comments.map((comment) => {
    return <CommentItem comment={comment} key={comment.id} addNewReply={addNewReply}/>;
  });
}
