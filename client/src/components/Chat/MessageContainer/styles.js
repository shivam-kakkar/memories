import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  beforeChat: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  afterChat: {
    backgroundColor: "#00A4E5",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "25px",
  },
  chatUser: {
    margin: 0,
    marginLeft: "8px",
    color: "white",
  },
  messagesContainer: {
    backgroundColor: "#FFFFFF",
    overflow: "auto",
  },
  sendButton: {
    backgroundColor: "#00A4E5",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    padding: "10px",
    cursor: "pointer",
    outline: "none",
  },
}));
