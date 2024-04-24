import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import NewUserPage from "../pages/NewUserPage";
import UpdateUserPage from "../pages/UpdateUserPage";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/newUser",
        element: <NewUserPage />,
      },
      {
        path: "/updateUser/:id",
        element: <UpdateUserPage />,
        loader: ({ params }) =>
          axios.get(
            `https://user-management-system-server-pearl.vercel.app/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
