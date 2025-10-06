import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import "./style/theme.css";
import routes from "./routes";

function App() {
  return (
  <ThemeProvider>
  <RouterProvider router={routes} />
  </ThemeProvider>
  );
}

export default App;
