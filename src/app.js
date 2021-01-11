import React from "react";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Routes from "./routes";
import MenuIcon from "@material-ui/icons/Menu";
import { ChevronLeft } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Link to="/">Meat</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />

        <ul>
          <li>
            <NavLink
              to="/restaurantes"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Restaurantes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </Drawer>

      <Routes />
    </>
  );
}

export default App;
