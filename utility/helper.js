export const updateComment = (comments, targetId, newComment) => {
  const commentsCopy = JSON.parse(JSON.stringify(comments));
  for (comments of commentsCopy) {
    if (comments.id === targetId) {
      comments.replies.push({
        id: new Date().getTime(),
        comment: newComment,
        replies: [],
      });
    }
    if (comments.replies.length > 0) {
      comments.replies = updateComment(comments.replies, targetId, newComment);
    }
  }

  return commentsCopy;
};
