import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  Slide,
  useScrollTrigger,
  useMediaQuery,
  Tooltip,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Link, useHistory, useLocation } from "react-router-dom";
import memories from "../../images/memories.png";
import useStyles from "./styles";
import { LOGOUT } from "../../constants/actionTypes";
import { useTheme } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TelegramIcon from "@material-ui/icons/Telegram";
import { OPEN_FORM } from "../../constants/actionTypes";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = props => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const headingProps = {
    variant: isSmallScreen ? "h5" : "h4",
  };
  const buttonProps = {
    size: isSmallScreen ? "small" : "medium",
  };

  const logout = () => {
    dispatch({ type: LOGOUT });

    history.push("/");

    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [user?.token, location]);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar} color="inherit">
          <div className={classes.brandContainer}>
            <Typography
              component={Link}
              to="/"
              className={classes.heading}
              {...headingProps}
              align="center"
            >
              Memories
            </Typography>
            <img className={classes.image} src={memories} alt="icon" />
          </div>
          <Toolbar className={classes.toolbar}>
            {user ? (
              <div className={classes.profile}>
                <Tooltip title="Create Post">
                  <AddCircleIcon
                    onClick={() => {
                      history.push("/");
                      dispatch({ type: OPEN_FORM });
                    }}
                    color="primary"
                    style={{ cursor: "pointer", fontSize: "40px" }}
                  />
                </Tooltip>
                <Tooltip title="Chat">
                  <Link to="/chat">
                    <TelegramIcon color="primary" style={{ cursor: "pointer", fontSize: "40px" }} />
                  </Link>
                </Tooltip>
                <div className={classes.titleBar}>
                  <Avatar
                    className={classes.purple}
                    alt={user.result.name}
                    src={user.result.imageUrl}
                  >
                    {user.result.name.charAt(0)}
                  </Avatar>
                  <Typography className={classes.userName} variant="h6">
                    {user.result.name.split(" ")[0]}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  className={classes.logout}
                  {...buttonProps}
                  color="secondary"
                  onClick={logout}
                  size="small"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button component={Link} to="/auth" variant="contained" color="primary" size="small">
                Sign In
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Navbar;
