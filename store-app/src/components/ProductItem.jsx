import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

function ProductItem({ product }) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ lg: 4, md: 5, sm: 6, xs: 12 }}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <img
            src={`http://localhost:5000/images/${product.image}`}
            style={{
              width: "100%",
            }}
          />
        </Paper>
      </Grid>
      <Grid size={{ lg: 8, md: 7, sm: 6, xs: 12 }}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" color="secondary.dark">
            {product.title}
          </Typography>
          <Typography variant="body1">{product.description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ProductItem;
