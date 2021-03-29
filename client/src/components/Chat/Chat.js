import React from "react";
import { Grow, Container, Grid } from "@material-ui/core";
import Chats from "./Chats/Chats";
import MessageContainer from "./MessageContainer/MessageContainer";

const Chat = () => {
  return (
    <Grow in>
      {/* <Container> */}
      <Grid container style={{ backgroundColor: "#FFFFFF", height: "91vh" }}>
        <Grid item sm={3} xs={12} style={{ borderRight: "3px solid #EFEFEF" }}>
          <Chats />
        </Grid>
        <Grid item sm={9} xs={12}>
          <MessageContainer />
        </Grid>
      </Grid>
      {/* </Container> */}
    </Grow>
  );
};

export default Chat;
