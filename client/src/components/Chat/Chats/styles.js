import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  heading: {
    textAlign: "center",
    margin: 0,
    padding: "10px",
  },
  chatDiv: {
    cursor: "pointer",
    padding: "5px 0",
    "&:hover": {
      backgroundColor: "#E5DDD5",
    },
  },
  noOnline: {
    display: "flex",
    height: "500px",
    justifyContent: "center",
    alignItems: "center",
  },
}));
