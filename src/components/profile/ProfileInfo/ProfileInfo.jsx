import React from "react";
import avatar from '../../../avatar.png';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
 if (!props.profile) {
   return <Preloader />
 }
  debugger;

    return (
      <div class='profileInfo'>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : avatar} class='profileInfo-Img' alt="#" />
       {props.profile.fullName}
      </div>
    );
}
export default ProfileInfo;