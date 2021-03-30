import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  heading: {
    textAlign: "center",
    margin: 0,
    padding: "10px",
    // backgroundColor: "#18B7FF",
    color: "#FFFFFF",
  },
  chatDiv: {
    cursor: "pointer",
    padding: "5px 0",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#F5F5F5",
      color: "#000000",
    },
  },
  noOnline: {
    display: "flex",
    height: "500px",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
  },
}));
