import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  heading: {
    textAlign: "center",
    margin: 0,
    padding: "10px",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  chatDiv: {
    padding: "5px 0",
    color: "#FFFFFF",
  },
  chatItem: {
    color: "#FFFFFFF",
    textAlign: "center",
    cursor: "pointer",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#e3e1e1",
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
