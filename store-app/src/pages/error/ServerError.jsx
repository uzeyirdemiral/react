import { Alert, Button, Paper, Typography } from "@mui/material";
import React from "react";
import {Link, useLocation } from "react-router";

function ServerError() {
  const { state } = useLocation();
  return (
    <Paper sx={{ p: 3 }}>
      {state?.error ? (
        <>
          <Typography variant="h4" gutterBottom>
            {state.error.message}-{state.status}
          </Typography>
          <Alert severity="error">
            {state.error.details || "Bilinmeyen bir hata oluştu"}
          </Alert>
        </>
      ) : (
        <>
          <Typography variant="h4">Server Error</Typography>
          <Alert security="error">Bilinmeyen bir hata oluştu!</Alert>
        </>
      )}

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

export default ServerError;
