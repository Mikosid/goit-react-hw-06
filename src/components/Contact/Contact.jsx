import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <p className={css.text}>
        <BsFillPersonFill className={css.iconPerson} />
        {name}
      </p>
      <p className={css.text}>
        <BsFillTelephoneFill className={css.iconPhone} />
        {number}
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
