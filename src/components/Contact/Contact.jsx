import s from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  const { id, number, name } = contact;

  return (
    <div className={s.container}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type='button' onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
