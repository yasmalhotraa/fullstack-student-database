import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./SidebarOptions/dashboard";
import Chapter from "./SidebarOptions/chapter";
import Settings from "./SidebarOptions/settings";
import Help from "./SidebarOptions/help";
import Reports from "./SidebarOptions/reports";
import Header from "./components/custom/Header";
import Sidebar from "./components/custom/Sidebar";
import Students from "./SidebarOptions/Students";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/chapter",
    element: <Chapter />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/students",
    element: <Students />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex h-screen bg-[#f6f8fa]">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[#f6f8fa]">
        <Header />
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>
);