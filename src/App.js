import SignIn from "./features/Signin/SignIn";
import Signup from "./features/signup/SignUp";
import Main from "./features/AppLayout/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./features/AppLayout/AppLayout";
import Error from "./Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Signup />, errorElement: <Error /> },
      { path: "/signin", element: <SignIn />, errorElement: <Error /> },
      { path: "/app", element: <Main />, errorElement: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
