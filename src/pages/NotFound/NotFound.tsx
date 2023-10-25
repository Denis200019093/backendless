import { FC } from "react";
import { NavLink } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div>
      <h1>The page does not exist</h1>
      <button>
        <NavLink to="/">Home page</NavLink>
      </button>
    </div>
  );
};

export default NotFound;
