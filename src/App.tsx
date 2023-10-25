import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Main from "pages/Main";
import NotFound from "pages/NotFound";

import "./App.css";

// Lazy pages
const DummyList = lazy(() => import("pages/DummyList"));
const DummyChart = lazy(() => import("pages/DummyChart"));
const DummyTable = lazy(() => import("pages/DummyTable"));

const App: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Main />}>
          <Route path="dummyTable" element={<DummyTable />} />
          <Route path="dummyChart" element={<DummyChart />} />
          <Route path="dummyList" element={<DummyList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
