import { FC, useEffect } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";

import { tabs } from "../../../__mocks__.ts";

import "./Main.css";

const Main: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const sortedTabs = tabs.sort((a, b) => a.order - b.order);

  useEffect(() => {
    if (pathname === "/") {
      navigate(sortedTabs[0].id);
    }
  }, [navigate, pathname, sortedTabs]);

  return (
    <main className="main">
      <section className="tabs">
        <ul>
          {sortedTabs.map((tab) => (
            <li key={tab.id}>
              <NavLink
                to={`/${tab.id}`}
                className={pathname === `/${tab.id}` ? "active" : ""}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
      <section className="tabs-content">
        <Outlet />
      </section>
    </main>
  );
};

export default Main;
