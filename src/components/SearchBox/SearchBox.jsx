import s from "./SearchBox.module.css";

export default function SearchBox({ onFilterChange, filterValue }) {
  return (
    <div className={s.container}>
      <label htmlFor='searchBar'>Finds contacts by name</label>
      <input
        type='input'
        name='searchBar'
        id='searchBar'
        value={filterValue}
        onChange={onFilterChange}
      />
    </div>
  );
}
