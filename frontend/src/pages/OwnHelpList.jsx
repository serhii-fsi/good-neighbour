import { useState, useEffect } from "react";
import Loading from "../presentations/Loading";
import { getOwnHelpList } from "../api";

function OwnHelpList() {
  const [ownHelpList, setOwnHelpList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const user_id = 1;

  useEffect(() => {
    getOwnHelpList(user_id)
      .then((response) => {
        setOwnHelpList(response.data.helpRequestsData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <Loading text={"your help requests"} />;
  }
  return (
    <>
      <h2>Your Help Requests</h2>
      <p>
        *Placeholder for ownhelplist. Waiting for endpoint to be available from
        the backend.*
      </p>
      {/* <ul>
        {ownHelpList.map((request) => {
          return (
            <li key={request.help_request_id}>
              Hello
              <HelpCard request={request} />
            </li>
          );
        })}
      </ul> */}
    </>
  );
}

export default OwnHelpList;
