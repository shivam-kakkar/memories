import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    marginTop: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    container: {
      marginTop: 0,
      padding: 0,
    },
  },
}));
