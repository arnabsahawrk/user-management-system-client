import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root/Root";
import Home from "../../pages/Home/Home";
import Error from "../../layouts/Error/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
