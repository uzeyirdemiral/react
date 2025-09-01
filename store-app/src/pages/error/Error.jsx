import {
  Alert,
  AlertTitle,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import requests from "../../api/apiClient";

function Error() {
  const [validationError, setValidationError] = useState({});

  function getValidationErrors() {
    requests.errors.get403Error().catch((data) => {
      setValidationError(data);
    });
  }
  return (
    <Box>
      {validationError && validationError.errors && (
        <Alert severity="error" sx={{ mb: 2 }}>
          <AlertTitle>{validationError.message}</AlertTitle>
          <List>
            {validationError.errors.map((error, index) => (
              <ListItem key={index}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
      <Button
        sx={{ mr:2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get400Error()}
      >
        Bad Request
      </Button>
      <Button
        sx={{ mr:2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get401Error()}
      >
        UnAuthorized
      </Button>
      <Button
        sx={{ mr:2 }}
        variant="outlined"
        color="error"
        onClick={getValidationErrors}
      >
        Validation Error
      </Button>
      <Button
        sx={{ mr:2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get404Error()}
      >
        Not Found
      </Button>
      <Button
        sx={{ mr:2 }}
        variant="outlined"
        color="error"
        onClick={() => requests.errors.get500Error()}
      >
        Server Eror
      </Button>
    </Box>
  );
}

export default Error;
