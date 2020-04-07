import React from "react";
import avatar from '../../../avatar.png';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div class='profileInfo'>
      <img src={props.profile.photos.large != null ? props.profile.photos.large : avatar} class='profileInfo-Img' alt="#" />
      <div>
        <h3>{props.profile.fullName}</h3>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
}
export default ProfileInfo;