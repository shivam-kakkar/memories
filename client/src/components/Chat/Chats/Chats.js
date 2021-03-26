import React, { useEffect } from "react";
import { Typography, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../actions/users";
import { setCurrentUser } from "../../../actions/currentSelected";
import useStyles from "./styles";

const Chats = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <h1 className={classes.heading}>Chats</h1>
      <div>
        <Divider />
        {users.map(user => (
          <div key={user._id}>
            <div className={classes.chatDiv} onClick={() => dispatch(setCurrentUser(user._id))}>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                {user.name}
              </Typography>
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </>
  );
};

export default Chats;
