import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import MainScreenLoader from "../src/Common/mainLoader";

const RootLayout = lazy(() => import("./Layouts/RootLayout"));
const Dashboard = lazy(() => import("./Pages/Home"));
const CryptoConverter = lazy(() => import("./Pages/CryptoConverter"));
const Page404 = lazy(() => import("./Pages/Page404"));
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const OtcDesk = lazy(() => import("./Pages/OtcDesk"));
const Blog = lazy(() => import("./Pages/Blogs"));
const Cryptocurrency = lazy(() => import("./Pages/Cryptocurrency"));
const Coin = lazy(() => import("./Pages/Coin"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/otcdesk" element={<OtcDesk />} /> 
        {/* <Route path="/blogs" element={<Blog />} /> */}
        <Route path="/crypto-converter" element={<CryptoConverter />} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        <Route path="/crypto-converter" element={<CryptoConverter />} />
        <Route path="/coins/:coin" element={<Coin />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );

  return (
    <Suspense fallback={MainScreenLoader}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
