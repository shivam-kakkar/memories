import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "96.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  contentContainer: {
    background: "white",
    justifyContent: "space-between",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5px",
    padding: "0 10px",
  },
  avatar: {
    backgroundColor: "purple",
    height: "35px",
    width: "35px",
  },
  avatarComment: {
    backgroundColor: "black",
    height: "25px",
    width: "25px",
    marginRight: "5px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  horizontal: {
    height: "1px",
    backgroundColor: "#ccc",
    border: "none",
  },
  middleContainer: {
    maxHeight: "354px",
    overflowY: "scroll",
  },
  title: {
    padding: "5px 16px 0 16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    wordBreak: "break-word",
  },
  message: {
    wordBreak: "break-word",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 20px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentDiv: {
    display: "flex",
    alignItems: "center",
  },
  [theme.breakpoints.down("xs")]: {
    middleContainer: {
      maxHeight: "100%",
    },
  },
  // [theme.breakpoints.down("sm")]: {
  //   middleContainer: {
  //     maxHeight: "130px",
  //   },
  // },
}));
