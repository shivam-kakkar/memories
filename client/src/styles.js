import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    marginTop: "30px",
  },
  modalDiv: {
    position: "absolute",
    maxWidth: 400,
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    background: "#FFFFFF",
    outline: "none",
  },
  modalCloseIcon: {
    position: "absolute",
    right: "5px",
    top: "5px",
    cursor: "pointer",
    color: "#999999",
  },
  [theme.breakpoints.down("sm")]: {
    container: {
      marginTop: "20px",
      padding: 0,
    },
  },
}));
