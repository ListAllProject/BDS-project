import { useState } from "react";
import "./index.scss";
import { List } from "./List";
import { SearchingForm } from "./SearchingForm";

export const Projects = () => {
  const [filterResult, setFilterResult] =
    useState<{
      MaTinh: number;
      MaHuyen: number;
      MaTT: number;
      isHome: number
     }>();
  return (
    <div className="home">
      <div className="home-container">
        <SearchingForm setFilterResult={setFilterResult} />
        <List filterResult={filterResult} />
      </div>
    </div>
  );
};
