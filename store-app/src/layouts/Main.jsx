import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

function Main() {
  return (
    <>
      <ToastContainer position="bottom-right" theme="colored"/>
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default Main;
