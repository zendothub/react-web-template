import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ height: "90vh", padding: "10px" }}>
        <Outlet /> {/* This renders the page content inside the layout */}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
