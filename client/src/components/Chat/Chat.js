import React from "react";
import { Grow, Container, Grid } from "@material-ui/core";
import Chats from "./Chats/Chats";
import MessageContainer from "./MessageContainer/MessageContainer";

const Chat = () => {
  return (
    <Grow in>
      <Container maxWidth="md">
        <Grid container style={{ height: "600px", backgroundColor: "#FFFFFF" }}>
          <Grid item md={4} style={{ borderRight: "3px solid #EFEFEF" }}>
            <Chats />
          </Grid>
          <Grid item md={8}>
            <MessageContainer />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Chat;
