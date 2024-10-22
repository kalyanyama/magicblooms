import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./Landingpage/page";
import Footer from "./Structures/Footer/page";
import Header from "./Structures/header/page";
import { theme } from "./theme";
import Contact from "./Components/Contact/page";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <LandingPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {/* <div style={{ position: "relative" }}> */}
        <Header />
        <RouterProvider router={router}></RouterProvider>
        <Footer />
      {/* </div> */}
    </MantineProvider>
  );
}

export default App;
