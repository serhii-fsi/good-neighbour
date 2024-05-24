// import HelpCard from "./HelpCard";

function HelpList({ helpList }) {
  console.log(helpList, "helpList 2");
  return (
    // <p>
    //   *Placeholder for helplist. Waiting for endpoint to be available from the
    //   backend.*
    // </p>
    <ul>
      {helpList.map((request) => {
        return (
          <li key={request.help_request_id}>
            {<HelpCard request={request} />}
          </li>
        );
      })}
    </ul>
  );
}

export default HelpList;
