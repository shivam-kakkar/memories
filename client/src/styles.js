import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    marginTop: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    container: {
      marginTop: "20px",
      padding: 0,
    },
  },
}));
