import React from "react";
import Stories from "./Components/Stories";
import Search from "./Components/Search";
import Pagination from "./Components/Pagination";
const titleStyle = {
  textAlign: "center",
  marginTop: "2rem",
  fontWeight: "900",
};
const App = () => {
  return (
    <>
      <h1 style={titleStyle}>Tech News Through trustiest source</h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
