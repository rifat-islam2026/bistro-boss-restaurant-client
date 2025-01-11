import { Outlet } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import Navbar from "../pages/Shared/Header/Navbar"

const Main = () => {
  return (
    <div>
          <Navbar />
          <div className="max-w-7xl mx-auto min-h-[calc(100vh-300px)]">
          <Outlet />
          </div>
          <Footer/>
    </div>
  )
}

export default Main
