import Login from "./pages/login"
import Visitor from "./pages/visitor/visitorPage"
import Guide from "./pages/guide/guide"
import Admin from "./pages/admin/admin"
import { Routes, Route, useNavigate } from "react-router-dom"
import Layout from "./components/layout"
import Unauth from "./pages/unauth"
import RequireAuth from "./components/requireAuth"
import Home from "./pages/home"
import {useEffect} from 'react'
import axiosInstance from "./api/axios"
import { useAuthStore } from "./store/auth"

function App() {
  const navigate = useNavigate()
  const updateInfoAuth = useAuthStore(state=>state.updateInfoAuth)
  useEffect(() => {
    (async function anyNameFunction() {
      const response = await axiosInstance("/account/role");
      const role = response.data
      updateInfoAuth(true,role)
      navigate(`/${role.toLowerCase()}`)
    })();
  },[])
  return (
    <Routes>
    <Route path="/" element={<Layout/>}>
      {/** public route */}
      
      <Route path="" element={<Home/>} />
      <Route path="unauth" element={<Unauth/>} />
    </Route>
    <Route path="login" element={<Login/>} />
      {/** private route */}
      <Route element={<RequireAuth allowRole={["VISITOR"]}/>}>
        <Route path="visitor" element={<Visitor/>} />
      </Route>
      <Route element={<RequireAuth allowRole={["GUIDE"]}/>}>
        <Route path="guide" element={<Guide/>} />
      </Route>
      <Route element={<RequireAuth allowRole={["ADMIN"]}/>}>
        <Route path="admin" element={<Admin/>} />
      </Route>
  </Routes>
  )
}

export default App
