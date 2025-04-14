import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SuspenseFallback from "../components/SuspenseFallback";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ToDoExampleView  from "../features/todo-example/TodoExampleView";

// Lazy-loaded pages
const Home = lazy(() => import("../features/todo/TodoView"));

const AppRoutes = () => {
  return (
    <Router>
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/examples" element={<ToDoExampleView />} />
        </Route>
      </Routes>
    </Suspense>
    </Router>
  );
};

export default AppRoutes;
