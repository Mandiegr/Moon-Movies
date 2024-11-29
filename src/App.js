import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { LoadingProvider } from "./context/LoadingProvider";

function App() {
  return (
    <LoadingProvider>
      <RouterProvider router={routes} />
    </LoadingProvider>
  );
}

export default App;
