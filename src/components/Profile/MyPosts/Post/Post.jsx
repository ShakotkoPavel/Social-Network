import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;