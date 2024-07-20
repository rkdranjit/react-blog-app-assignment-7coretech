import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "10px", marginBottom: "20px" }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Blog Post
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
