import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    marginTop: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    container: {
      marginTop: "15px",
      padding: 0,
    },
  },
}));
