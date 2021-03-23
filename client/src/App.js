import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import PostScreen from "./components/PostScreen/PostScreen";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Navbar />
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
