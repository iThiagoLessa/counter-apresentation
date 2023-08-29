import { createBrowserRouter } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import AsyncRequestPage from "./components/pages/AsyncRequestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/requests",
    element: <AsyncRequestPage />,
  },
]);

export { router };
