import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      Main content
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={classes.posts}>
          <div className={classes.item}>
            post1
          </div>
          <div className={classes.item}>
            post2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;