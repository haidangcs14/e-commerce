import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/HomePage/HomePage";
import { ROUTERS } from "./utils/router";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
  ];

  return (
    <Routes>
      {userRouters.map((router, index) => {
        <Route key={index} path={router.path} element={router.component} />;
      })}
    </Routes>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
