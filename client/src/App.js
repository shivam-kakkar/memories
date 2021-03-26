import React from "react";
import { colors, Container, Modal } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentId, clearPost } from "./actions/currentSelected";
import { CLOSE_FORM } from "./constants/actionTypes";
import Form from "./components/Form/Form";
import CloseIcon from "@material-ui/icons/Close";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import PostScreen from "./components/PostScreen/PostScreen";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const open = useSelector(state => state.formOpen);
  const dispatch = useDispatch();

  const closeForm = () => {
    dispatch(clearCurrentId());
    dispatch({ type: CLOSE_FORM });
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Modal open={open} onClose={() => closeForm()}>
        <div
          style={{
            position: "absolute",
            maxWidth: 400,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "#FFFFFF",
            outline: "none",
          }}
        >
          <CloseIcon
            style={{
              position: "absolute",
              right: "5px",
              top: "5px",
              cursor: "pointer",
              color: "#999999",
            }}
            onClick={() => closeForm()}
          />
          <Form />
        </div>
      </Modal>
      <Container maxWidth="lg" className={classes.container}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/post/:id" exact component={PostScreen} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
