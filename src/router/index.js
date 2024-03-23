import Home from "../page/Home/index";
import Login from "../page/Login/index";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
// 测试我修改了router 
