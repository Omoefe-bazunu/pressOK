import { Home } from "./Homepage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Messages } from "./Messages";
import { ErrorPage } from "./ErrorPage";
import { RootLayout } from "./RootLayout";
import { AdminLogin } from "./AdminLogin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="AdminLogin" element={<AdminLogin />} />
      <Route path="Messages" element={<Messages />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
