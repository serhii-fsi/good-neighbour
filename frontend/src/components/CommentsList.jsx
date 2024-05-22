import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../presentations/Loading";
import { getCommentsList } from "../api";

function CommentsList() {
  const { help_request_id } = useParams();
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

  // We need to make a nested array of comments below, which each subarray being a single commentsConversation, each of which is an array of comments with the same helper-user_id (the requester user_id and help_request_id will always be the same). I am currently unsure how, will revisit tomorrow and look at array methods to use.

  const comments2DArray = commentsList.map(() => {
    return;
  });

  if (isLoading) {
    return <Loading text={"responses"} />;
  }
  return (
    <>
      <h2>Responses</h2>
      <p>
        *Placeholder for commentsList. Waiting for endpoint to be available from
        the backend.*
      </p>
      {/* <ul>
        {commentsList.map((commentThread) => {
          return (
            <li key={comment.comment_id}>
              <CommentConversation commentThread={commentThread} />
            </li>
          );
        })}
      </ul> */}
    </>
  );
}

export default CommentsList;
