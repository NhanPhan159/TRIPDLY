import Trips from "./pages/trips";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import Feeds from "./pages/feeds";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        {/** public route */}

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
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
