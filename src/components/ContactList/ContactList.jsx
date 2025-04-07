import Contact from "../Contact/Contact";

const ContactList = ({ contactsData, onDeleteContact }) => {
  return (
    <ul>
      {contactsData.map(({ id, ...item }) => {
        return (
          <li key={id}>
            <Contact id={id} {...item} onDelete={onDeleteContact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
