import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles(theme => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  heading: {
    color: "#00A4E5",
    textDecoration: "none",
    fontWeight: "bold",
  },
  image: {
    marginLeft: "15px",
    width: "35px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  titleBar: {
    display: "flex",
    cursor: "pointer",
    padding: "10px",
    "&:hover": {
      border: "1px solid #D8DADF",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  addIcon: {
    cursor: "pointer",
    fontSize: "40px",
  },
  chatIcon: {
    cursor: "pointer",
    fontSize: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
  [theme.breakpoints.down("xs")]: {
    appBar: {
      alignItems: "center",
    },
    heading: {
      marginLeft: "5px",
    },
    toolbar: {
      width: "100%",
    },
    profile: {
      width: "auto",
    },
    titleBar: {
      display: "none",
    },
    image: {
      marginLeft: "15px",
      width: "30px",
    },
  },
}));
