import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  beforeChat: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  afterChat: {
    backgroundColor: "#5F0A87",
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
    backgroundColor: "#E5DDD5",
    overflow: "auto",
  },
  sendButton: {
    backgroundColor: "#5F0A87",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    padding: "10px",
    cursor: "pointer",
    outline: "none",
  },
}));
