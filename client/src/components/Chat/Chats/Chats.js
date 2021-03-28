import React, { useState, useEffect } from "react";
import { Typography, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../../actions/currentSelected";
import useStyles from "./styles";

const Chats = () => {
  const usersList = useSelector(state => state.online);
  const currentUser = useSelector(state => state.currentSelected.currentUser);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.heading}>Chats</h1>
      <div>
        <Divider />
        {usersList.length === 0 ? (
          <h1>No users currently online</h1>
        ) : (
          usersList.map(user => (
            <div key={user.userId}>
              <div
                className={classes.chatDiv}
                onClick={() => dispatch(setCurrentUser(user.userId))}
              >
                <Typography variant="h6" style={{ textAlign: "center" }}>
                  {user.name}
                </Typography>
              </div>
              <Divider />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Chats;
