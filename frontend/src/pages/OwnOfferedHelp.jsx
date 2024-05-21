import { useState, useEffect } from "react";
import Loading from "../presentations/Loading";
import { getOfferedHelpList } from "../api";

function OwnOfferedHelp() {
  const [offeredHelpList, setOfferedHelpList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const user_id = 1;

  useEffect(() => {
    getOfferedHelpList(user_id)
      .then((response) => {
        setOfferedHelpList(response.data.helpRequestsData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <Loading text={"your offered helps"} />;
  }
  return (
    <>
      <h2>Help You've Offered</h2>
      <p>
        *Placeholder for offeredhelplist. Waiting for endpoint to be available
        from the backend.*
      </p>
      {/* <ul>
        {offeredHelpList.map((request) => {
          return (
            <li key={request.help_request_id}>
              <HelpCard request={request} />
            </li>
          );
        })}
      </ul> */}
    </>
  );
}

export default OwnOfferedHelp;
