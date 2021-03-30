import React from "react";
import { Grow, Container, Grid } from "@material-ui/core";
import Chats from "./Chats/Chats";
import MessageContainer from "./MessageContainer/MessageContainer";

const Chat = () => {
  return (
    <Grow in>
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <Grid container style={{ backgroundColor: "#FFFFFF" }} className="chatHeight">
          <Grid item sm={3} xs={12} style={{ borderRight: "3px solid #EFEFEF" }}>
            <Chats />
          </Grid>
          <Grid item sm={9} xs={12}>
            <MessageContainer />
          </Grid>
        </Grid>
      </div>
    </Grow>
  );
};

export default Chat;
