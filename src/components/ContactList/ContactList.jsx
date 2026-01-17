import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  console.log(contacts);
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
