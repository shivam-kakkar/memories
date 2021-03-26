import React, { useEffect } from "react";
import { Container, Grow, Grid, Modal } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentId, clearPost } from "../../actions/currentSelected";

import { getPosts } from "../../actions/posts";
import { getUsers } from "../../actions/users";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";
import { CLOSE_FORM } from "../../constants/actionTypes";

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const open = useSelector(state => state.formOpen);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearCurrentId());
    dispatch(clearPost());
  }, []);

  const closeForm = () => {
    dispatch(clearCurrentId());
    dispatch({ type: CLOSE_FORM });
  };

  return (
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
          {/* <Modal open={open} onClose={() => closeForm()}>
            <div
              style={{
                position: "absolute",
                maxWidth: 400,
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <Form />
            </div>
          </Modal> */}
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
