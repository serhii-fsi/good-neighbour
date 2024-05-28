// import HelpCard from "./HelpCard";
import contactCardsView from "./ContactsCard/ContactsCardView";
function HelpList({ helpList }) {
  return (
    <contactCardsView>
      <p>
        *Placeholder for helplist. Waiting for endpoint to be available from the
        backend.*
      </p>
    </contactCardsView>
    // <ul>
    //   {helpList.map((request) => {
    //     return (
    //       <li key={request.help_request_id}>{<HelpCard request={request} />}</li>
    //     );
    //   })}
    // </ul>
  );
}

export default HelpList;
