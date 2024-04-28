import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Contracts from "../pages/Contracts/Contracts";
import NotFound from "../pages/Not-found/NotFound";
import Patients from "../pages/Patients/Patients";
import Role from "../pages/Role/Role";
import Settings from "../pages/Settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Contracts />,
      },
      {
        path: "/dashboard/contracts",
        element: <Contracts />,
      },
      {
        path: "/dashboard/patients",
        element: <Patients />,
      },
      {
        path: "/dashboard/home-visits",
        element: <Contracts />,
      },

      {
        path: "/dashboard/role",
        element: <Role />,
      },

      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
