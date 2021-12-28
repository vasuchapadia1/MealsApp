import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid, Typography } from "@mui/material";

const CartButton = (props) => {
  return (
    <Button
      color="inherit"
      style={{
        backgroundColor: "grey",
        color: "#FFF",
        borderRadius: 10,
      }}
    >
      <Grid item style={{ margin: 2 }}>
        <ShoppingCartIcon />
      </Grid>
      <Grid item style={{ margin: 2 }}>
        <Typography variant="subtitle1" component="div">
          Your Cart
        </Typography>
      </Grid>
      <Grid
        style={{
          margin: 2,
          backgroundColor: "black",
          borderRadius: 10,
          height: 25,
          width: 25,
        }}
      >
        <Typography>3</Typography>
      </Grid>
    </Button>
  );
};

export default CartButton;
