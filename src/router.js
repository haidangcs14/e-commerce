import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/HomePage/HomePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/themes/MasterLayout/MasterLayout";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
