import React, { useState, useEffect } from "react";
import "./characters.scss";
import CardList from "../shared/CardList";
import useSearchableAPI from "../../hooks/useSearchableAPI"
import Search from "../shared/Search";


const Characters = () => {
  const [search, setSearch] = useState("");
  const { data, loading } = useSearchableAPI({ name: search });

  const onSearchChanged = searchTerm => {
    setSearch(searchTerm);
  };

  return (
    <>
      <Search onSearchSubmitted={onSearchChanged} />
      {loading && <h3>Loading...</h3>}
      <div className="characters">
        <CardList items={data} />
      </div>
    </>
  );
};

export default Characters;
