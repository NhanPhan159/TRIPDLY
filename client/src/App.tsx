import Trips from "./pages/trips";
import User, {userLoader} from "./pages/user";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import Feeds from "./pages/feeds";
import NotFound from "./pages/NotFound";
import Login from "./pages/login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        {/** public route */}
        <Route path="login" element={<Login/>}/>
        <Route index element={<Feeds />} />
        <Route
          path="trips/:id"
          element={<Trips />}
          loader={({ params }: any) => {
            const trip = {
              idTrip: params.id,
              nameTrip: "Trip A",
            };
            return new Response(JSON.stringify(trip), {
              status: 200,
              headers: {
                "Content-Type": "application/json; utf-8",
              },
            });
          }}
        />
        <Route
          path="/user/:id"
          element={<User />}
          loader={({params}:any) => {
            return userLoader(params.id)}
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
