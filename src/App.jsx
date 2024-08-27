
import { lazy, Suspense } from "react";
import About from "./Pages/About";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const RootLayout = lazy(() => import("./Layouts/RootLayout"));
const Dashboard = lazy(() => import("./Pages/Home"));
const CryptoConverter =lazy(()=> import("./Pages/CryptoConverter"));
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/About" element={<About/>}/>


        <Route 
          path="/crypto-converter"
          element={<CryptoConverter/>}
        />
      </Route>

      )
    );


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App