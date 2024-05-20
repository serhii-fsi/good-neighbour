import HelpCard from "./HelpCard";

function HelpListView({ helpList }) {
  return (
    <ul>
      {helpList.map((request) => {
        return (
          <li key={request.request_id}>{<HelpCard request={request} />}</li>
        );
      })}
    </ul>
  );
}

export default HelpListView;
