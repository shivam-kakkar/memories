import React from "react";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../../actions/currentSelected";
import useStyles from "./styles";

const Chats = () => {
  const usersList = useSelector(state => state.online);
  const currentUser = useSelector(state => state.currentSelected.currentUser);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.heading}>Chats</h2>
      <div>
        {/* <Divider /> */}
        {usersList.length === 0 ? (
          <div className={classes.noOnline}>
            <h2>No users currently online</h2>
          </div>
        ) : (
          usersList.map(user => (
            <div key={user.email}>
              <div
                style={{
                  backgroundColor: currentUser === user.email ? "#FFFFFF" : null,
                  color: currentUser === user.email ? "#000000" : null,
                }}
                className={classes.chatDiv}
                onClick={() => dispatch(setCurrentUser(user.email))}
              >
                <Typography variant="h6" style={{ textAlign: "center" }}>
                  {user.name}
                </Typography>
              </div>
              {/* <Divider /> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Chats;
