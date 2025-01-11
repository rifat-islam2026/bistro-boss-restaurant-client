import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "../Layout/Main"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Home from "../pages/Home/Home/Home"

const Router = () => {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />} >
                  <Route index element={<Home />} />
                  
                  <Route path="*" element={<ErrorPage/>} />
              </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
