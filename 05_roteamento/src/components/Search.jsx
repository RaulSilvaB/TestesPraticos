import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [seachParams] = useSearchParams();
  const query = seachParams.get("query");

  return (
    <div>
      <h2>Resultados da busca de {query}</h2>
    </div>
  );
};

export default Search;
