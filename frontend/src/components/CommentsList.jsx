import { useState, useEffect } from "react";
import Loading from "../presentations/Loading";

function CommentsList() {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState("true");

  useEffect(() => {
    getCommentsList(help_request_id)
      .then((response) => {
        setCommentsList(response.data.commentsData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <Loading text={"responses"} />;
  }
  return (
    <>
      <h2>Responses</h2>
      <ul>
        {commentsList.map((commentThread) => {
          return (
            <li key={comment.comment_id}>
              <CommentConversation commentThread={commentThread} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CommentsList;
