import {
  AppBar,
  Box,
  IconButton,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useContext } from "react";
import { AppContext } from "../context";
import routes from "../routes/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const pathName = props.location.pathname.split("/");
  const filterPath = routes.filter((route, index) => {
    return route.name.toLowerCase() === pathName[1].toLowerCase();
  });

  const getPath = filterPath.length > 0 ? filterPath[0].name : "Unknown";
  const classes = useStyles();
  const { openSidebar, darkMode, setDarkTheme } = useContext(AppContext);
  return (
    <Box>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => openSidebar()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {getPath}
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>Dark Mode</p>
            <Switch
              color="secondary.light"
              checked={darkMode}
              onChange={() => setDarkTheme()}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
