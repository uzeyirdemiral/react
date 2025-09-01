import { Alert, Button, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router";

function NotFound() {

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Not Found Error
      </Typography>
      <Alert severity="error"> Aradiğiniz Kaynak Bulunamadi</Alert>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
      >
        Anasayfa
      </Button>
    </Paper>
  );
}

export default NotFound;
