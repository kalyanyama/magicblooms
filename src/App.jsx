import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/page";
import LandingPage from "./Landingpage/page";
import Footer from "./Structures/Footer/page";
import Header from "./Structures/header/page";
import { theme } from "./theme";

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
      <Header />
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </MantineProvider>
  );
}

export default App;
