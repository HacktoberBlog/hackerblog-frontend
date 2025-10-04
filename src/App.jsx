import { RouterProvider } from "react-router-dom";
import { MyProvider } from "./context/MyContext";

import routes from "./routes";

function App() {
  return (
    <MyProvider>
      <RouterProvider router={routes} />
    </MyProvider>
  );
}

export default App;
