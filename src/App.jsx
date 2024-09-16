import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Services from "./Pages/Services";
import OtcDesk from "./Pages/OtcDesk";
import Blog from "./Pages/BlogH";

const RootLayout = lazy(() => import("./Layouts/RootLayout"));
const Dashboard = lazy(() => import("./Pages/Home"));
const CryptoConverter = lazy(() => import("./Pages/CryptoConverter"));
const Page404 = lazy(() => import("./Pages/Page404"));
const About = lazy(() => import("./Pages/About"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>

        <Route path="/OtcDesk" element={<OtcDesk/>}/>
        <Route path="/BlogH" element={<Blog/>}/>
        <Route 
          path="/crypto-converter"
          element={<CryptoConverter/>}/>
          <Route path="*" element={<Page404/>}/>
      </Route>


      )
    );


  return (
    <Suspense fallback={<mainLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
