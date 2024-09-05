import { lazy, Suspense } from "react";
import About from "./Pages/About";
import Page404 from "./Pages/Page404";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Services from "./Pages/Services";

const RootLayout = lazy(() => import("./Layouts/RootLayout"));
const Dashboard = lazy(() => import("./Pages/Home"));
const CryptoConverter = lazy(() => import("./Pages/CryptoConverter"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/crypto-converter" element={<CryptoConverter />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
