import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  heading: {
    textAlign: "center",
  },
  chatDiv: {
    cursor: "pointer",
    padding: "5px 0",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
}));
