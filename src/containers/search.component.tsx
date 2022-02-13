import React, { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../redux";

const Search: React.FC  = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  
    dispatch(ActionCreator.searchReposity(term));
  }

  return (
    <div className="searrchc">
      <form onSubmit={search}>
          <input type="text" name="name" value={term} onChange={e=>setTerm(e.target.value)} id="name" />

          <input type="submit" value="Searh" />
      </form>
    </div>
  )
}

export default Search;