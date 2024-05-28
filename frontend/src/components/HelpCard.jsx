// import { Link } from "react-router-dom";

function HelpCard({ request }) {
  const param = `/${request.help_request_id}`;
  const path = `/help-requests${param}`;

  return (
    <section>
      {/* <p>*HelpCard placeholder*</p> */}
      <h3>{request.title}</h3>
      <p>Description: {request.description}</p>
      <p>Created at: {request.created_at}</p>
      <p>Date(s): {request.req_date}</p>
      <p>Location: {request.post_code}</p> <p>Status: {request.status}</p>
      <Link to={path}>View Help Request</Link>
    </section>
  );
}

export default HelpCard;
