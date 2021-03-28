import React from "react";
import { Grow, Container, Grid } from "@material-ui/core";
import Chats from "./Chats/Chats";
import MessageContainer from "./MessageContainer/MessageContainer";

const Chat = () => {
  return (
    <Grow in>
      <Container maxWidth="md">
        <Grid container style={{ height: "600px", backgroundColor: "#FFFFFF" }}>
          <Grid item sm={4} xs={12} style={{ borderRight: "3px solid #EFEFEF" }}>
            <Chats />
          </Grid>
          <Grid item sm={8} xs={12}>
            <MessageContainer />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Chat;
