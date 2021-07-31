import "./index.scss";
import { List } from "./List";
import { SearchingForm } from "./SearchingForm";

export const Projects = () => {
  return (
    <div className="home">
      <div className="home-container">
        <SearchingForm />
        <List />
      </div>
    </div>
  );
};
