import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import mainLoader from '../src/Common/mainLoader';


const RootLayout = lazy(() => import("./Layouts/RootLayout"));
const Dashboard = lazy(() => import("./Pages/Home"));
const CryptoConverter = lazy(() => import("./Pages/CryptoConverter"));
const Page404 = lazy(() => import("./Pages/Page404"));
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const OtcDesk = lazy(() => import("./Pages/OtcDesk"));
const Cryptocurrency = lazy(() => import("./Pages/Cryptocurrency"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>

        <Route path="/OtcDesk" element={<OtcDesk/>}/>
        <Route path="/Cryptocurrency" element={<Cryptocurrency/>}/>

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
