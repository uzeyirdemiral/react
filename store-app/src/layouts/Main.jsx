import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import { Outlet } from "react-router";

function Main() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default Main;
