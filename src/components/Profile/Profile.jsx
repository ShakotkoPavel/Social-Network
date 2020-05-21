import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      Main content
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;