import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CartButton from "./CartButton";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

const Header = (props) => {
  return (
    <React.Fragment>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#dfe6e9",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}} style={{color:"black"}}>
            Meals App
          </Typography>
          <CartButton />
        </Toolbar>
      </AppBar>
      <div>
        <img src="" alt="photos here"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
