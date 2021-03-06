import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { clearCurrentId, clearPost, clearCurrentUser } from "../../actions/currentSelected";

import { getPosts } from "../../actions/posts";
import { getUsers } from "../../actions/users";
import Posts from "../Posts/Posts";
import useStyles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearCurrentId());
    dispatch(clearPost());
    dispatch(clearCurrentUser());
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Posts />
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
