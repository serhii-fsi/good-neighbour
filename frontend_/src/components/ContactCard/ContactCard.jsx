import ContactCardView from "./ContactCardView";

/**
 * @param {object} props
 * @param {number} props.userId
 * @param {string} props.fullName
 * @param {string} props.address
 * @param {string} props.postcode
 * @param {string} props.phoneNumber
 * @param {string} props.additionalContacts
 * @param {array|undefined} props.children
 */
export default function ContactCard(props) {
    return <ContactCardView {...props} />;
}
