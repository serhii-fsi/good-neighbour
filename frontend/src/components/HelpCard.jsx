function HelpCard({ request }) {
  return (
    <section>
      <h3>{request.request_title}</h3>
      <p>Description: {request.request_body}</p>
      <p>Date(s): {request.request_date}</p>
      <p>Created at: {request.created_at}</p>
      <p>Location: {request.location}</p>
    </section>
  );
}

export default HelpCard;
