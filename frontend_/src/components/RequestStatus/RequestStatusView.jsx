/**
 * @param {object} props
 * @param {string} props.requestStatus active|completed|closed
 * @param {[
 *           {
 *             status: string,
 *             helper: { id: number, first_name: string, last_name: string }
 *           }
 *        ]} props.requestOffers status: active|accepted|declined
 */
export default function RequestStatusView(props) {
    return (
        <>
            requestStatus: {props.requestStatus} <br />
            requestOffers: {JSON.stringify(props.requestOffers)} <br />
        </>
    );
}
