import Login from "./pages/login"
import Visitor from "./pages/visitorPage"
import Guide from "./pages/guide"
import Admin from "./pages/admin"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Unauth from "./pages/unauth"
import RequireAuth from "./components/requireAuth"

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/** public route */}
          <Route path="login" element={<Login/>} />
          <Route path="unauth" element={<Unauth/>} />
        </Route>

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
