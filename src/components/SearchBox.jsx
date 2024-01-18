import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

export default function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        name="search"
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}
