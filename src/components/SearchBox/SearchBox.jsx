import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearchBox }) {
  return (
    <div className={`${css.form} ${css.formGroup}`}>
      <p className={css.label}>Search by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onSearchBox(e.target.value)}
      />
    </div>
  );
}
