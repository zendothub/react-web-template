import { Outlet } from "react-router-dom";
// import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <>
    <Navbar />
    {/* <Container sx={{ height: "90vh", padding: "10px" }}> */}
      <Outlet /> {/* This renders the page content inside the layout */}
    {/* </Container> */}
    {/* <Footer /> */}
  </>
  );
};

export default AuthLayout;
