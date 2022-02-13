import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootReducerType } from "../redux/reducers";

import { useActions } from "../hooks/useAction";

const Search: React.FC  = () => {
  const [term, setTerm] = useState('');
  const { searchReposity } = useActions();

  const {error, data, loading} = useSelector((state: RootReducerType) => state.repositories);
  
  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  
    searchReposity(term);
  }

  return (
    <div className="searrchc">
      <form onSubmit={search}>
          <input type="text" name="name" value={term} onChange={e=>setTerm(e.target.value)} id="name" />

          <input type="submit" value="Searh" />
          <hr />
          {error && <h3>{error}</h3>}
          {loading && <h3>Loading...</h3>}
          {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
      </form>
    </div>
  )
}

export default Search;