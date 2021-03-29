import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  messageContainer: {
    display: "flex",
    padding: "0 1%",
    margin: "10px 0",
  },
  messageBox: {
    padding: "20px 15px",
    borderRadius: "15px",
    wordWrap: "break-word",
    maxWidth: "60%",
  },
}));
