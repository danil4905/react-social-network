import React from "react";
import avatar from '../../../avatar.png';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className='profileInfo'>
      <img src={props.profile.photos.large != null ? props.profile.photos.large : avatar} className='profileInfo-Img' alt="#" />
      <div>
        <h3>{props.profile.fullName}</h3>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        <div>
          <ul>
            <li>email</li>
            <li>phone</li>
            <li>web</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProfileInfo;