import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Procurar..."
      />
      <button value={"submit"}>Buscar</button>
    </form>
  );
};

export default Search;
