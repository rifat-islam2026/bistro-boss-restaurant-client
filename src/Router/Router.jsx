import { BrowserRouter, Route, Routes } from "react-router-dom"
import Root from "../Layout/Root"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Home from "../pages/Home/Home/Home"
import Menu from "../pages/OurMenu/Menu/Menu"

const Router = () => {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Root/>} >
                  <Route index element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  {/* Error pages */}
                  <Route path="*" element={<ErrorPage/>} />
              </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
