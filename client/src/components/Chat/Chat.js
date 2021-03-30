import React from "react";
import { Grow, Grid } from "@material-ui/core";
import Chats from "./Chats/Chats";
import MessageContainer from "./MessageContainer/MessageContainer";

const Chat = () => {
  return (
    <Grow in>
      <div style={{ backgroundColor: "#FFFFFF", overflow: "hidden" }}>
        <Grid
          container
          className="chatHeight"
          style={{ alignItems: "stretch", backgroundColor: "#00A4E5" }}
        >
          <Grid item sm={3} xs={12} style={{ borderRight: "1px solid #00A4E5" }}>
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
