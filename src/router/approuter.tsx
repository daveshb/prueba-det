import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Spinner } from "@heroui/react";

const UserListView = lazy(() => import("../views/userListView"));
const UseEffectView = lazy(() => import("../views/useEffectView/UseEffectView"));
const ButtonMessageView = lazy(() => import("../views/buttonMessageView/ButtonMessageView"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner size="lg" />}>
        <Routes>
          <Route path="/" element={<UserListView />} />
          <Route path="/useeffect" element={<UseEffectView />} />
          <Route path="/buttonmessage" element={<ButtonMessageView />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
