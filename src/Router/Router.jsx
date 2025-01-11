import { BrowserRouter, Route, Routes } from "react-router-dom"
import Root from "../Layout/Root"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Home from "../pages/Home/Home/Home"

const Router = () => {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Root/>} >
                  <Route index element={<Home />} />
                  
                  {/* Error pages */}
                  <Route path="*" element={<ErrorPage/>} />
              </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
