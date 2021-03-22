import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles(theme => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
    width: "60px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  titleBar: {
    display: "flex",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
  [theme.breakpoints.down("xs")]: {
    appBar: {
      display: "flex",
      // flexDirection: "column",
      // justifyContent: "space-between",
      alignItems: "center",
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
    },
    profile: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    userName: {
      display: "none",
    },
    image: {
      marginLeft: "15px",
      width: "30px",
    },
  },
}));
