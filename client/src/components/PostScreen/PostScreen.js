import React, { useState, useEffect } from "react";
import {
  Grow,
  Container,
  Grid,
  CardMedia,
  Avatar,
  Typography,
  CircularProgress,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import CommentOutlined from "@material-ui/icons/CommentOutlined";
import AccountCircle from "@material-ui/icons/AccountCircle";
import moment from "moment";
import { setCurrentId, getPost } from "../../actions/currentSelected";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, likePost, commentPost } from "../../actions/posts";
import useStyles from "./styles";

const PostScreen = ({ history, match }) => {
  const [commentBody, setCommentBody] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();
  const post = useSelector(state => state.currentSelected.currentPost);
  const id = match.params.id;
  useEffect(() => {
    dispatch(setCurrentId(id));
    dispatch(getPost(id));
  }, [dispatch, id]);
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(like => like === (user?.result?.googleId || user?.result?._id)) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const handleDelete = () => {
    dispatch(deletePost(post._id));
    history.push("/");
  };

  const handleComment = async () => {
    await dispatch(commentPost(post._id, { body: commentBody, name: user.result.name }));
    console.log(user.result.name);
    setCommentBody("");
    await dispatch(getPost(id));
    var middleContainer = document.getElementById("middle");
    middleContainer.scrollTop = middleContainer.scrollHeight;
  };

  const handleLike = async () => {
    await dispatch(likePost(post._id));
    await dispatch(getPost(id));
  };
  const focus = () => {
    if (user?.result) {
      document.getElementById("comment").focus();
    } else {
      history.push("/auth");
    }
  };
  return !post ? (
    <CircularProgress />
  ) : (
    <Grow in>
      <Container maxWidth="md" style={{ padding: 0 }}>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <CardMedia
              className={classes.media}
              image={
                post.selectedFile ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              title={post.title}
            />
          </Grid>
          <Grid
            container
            item
            direction="column"
            xs={12}
            sm={5}
            className={classes.contentContainer}
          >
            <div>
              <div className={classes.profile}>
                <div style={{ display: "flex" }}>
                  <Avatar className={classes.avatar}>{post.name.charAt(0)}</Avatar>
                  <Typography className={classes.userName} variant="h6">
                    {post.name}
                  </Typography>
                </div>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
              </div>
              <hr className={classes.horizontal} />
              <div id="middle" className={classes.middleContainer}>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <CardContent>
                  <Typography className={classes.message} variant="body2" component="p">
                    {post.message}
                  </Typography>
                </CardContent>
                <div className={classes.details}>
                  <Typography variant="body2" color="textSecondary" component="h2">
                    {post.tags.map(tag => `#${tag} `)}
                  </Typography>
                </div>
                <div>
                  <hr className={classes.horizontal} />
                  <Typography style={{ padding: "0 5px" }} variant="h5">
                    comments({post.comments.length})
                  </Typography>
                </div>
                <div style={{ padding: "5px" }}>
                  {post.comments.map(comment => (
                    <div
                      key={comment._id}
                      style={{
                        display: "inline-block",
                        // alignItems: "flex-start",
                        padding: "2px 0",
                      }}
                    >
                      {/* <Avatar className={classes.avatarComment} alt={comment.name}>
                        {comment.name.charAt(0)}
                      </Avatar> */}
                      <span style={{ color: "#484848", marginRight: "5px", fontWeight: "bold" }}>
                        {comment.name}
                      </span>
                      <span style={{ wordBreak: "break-word" }}>{comment.body}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <hr className={classes.horizontal} />
              <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                  <Likes />
                </Button>
                <Button color="primary" onClick={focus}>
                  <CommentOutlined fontSize="small" />
                </Button>
                {(user?.result?.googleId === post?.creator ||
                  user?.result?._id === post?.creator) && (
                  <Button size="small" color="primary" onClick={handleDelete}>
                    <DeleteIcon fontSize="small" /> Delete
                  </Button>
                )}
              </CardActions>
              {user?.result ? (
                <div className={classes.commentDiv}>
                  <TextField
                    id="comment"
                    variant="outlined"
                    size="small"
                    style={{ padding: "2px 0", width: "77%" }}
                    placeholder="Add a comment"
                    value={commentBody}
                    onChange={e => setCommentBody(e.target.value)}
                  />
                  <Button onClick={handleComment}>Post</Button>
                </div>
              ) : (
                <div>
                  <hr className={classes.horizontal} />
                  <div style={{ textAlign: "center", paddingBottom: "5px" }}>
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                      Login
                    </Link>{" "}
                    to like or comment{" "}
                  </div>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default PostScreen;
