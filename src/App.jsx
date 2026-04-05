import { useState } from "react";
import Comments from "./components/Comments";
import commentsData from "./data/comments";
import { updateComment } from "../utility/helper";

function App() {
  const [comments,setComments] = useState(commentsData)

  const addNewReply = (targetId,newComment) => {
    const updatedComments = updateComment(comments,targetId,newComment)
    setComments(updatedComments)
  }

  return (
    <>
      <Comments comments={comments} addNewReply={addNewReply}/>
    </>
  );
}

export default App;
