import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "96.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5px",
    padding: "0 10px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    // height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 20px",
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
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
