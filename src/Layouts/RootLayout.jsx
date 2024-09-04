import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import TopBar from "../Components/TopBar"

const RootLayout = () => {
  return (
    <>
    <TopBar/>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default RootLayout