import React from "react";
import avatar from '../../../avatar.png';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  const onSetPhoto = (photo) => {
    if (photo.target.files.length) {
      savePhoto(photo.target.files[0]);
    }
  }
  if (!profile) {
    return <Preloader />
  }
  return (
    <div className='profileInfo'>
      <img src={profile.photos.large != null ? profile.photos.large : avatar} className='profileInfo-Img' alt="#" />
      {isOwner && <input type='file' onChange={onSetPhoto} />}
      <div>
        <h3>{profile.fullName}</h3>
        <ProfileStatus status={status} updateStatus={updateStatus} />
        <div>
          <ul>
            <li>About me: {profile.aboutMe}</li>
            <li>Facebook: <a href={profile.contacts.facebook}>{profile.contacts.facebook}</a></li>
            <li>Vk: <a href={profile.contacts.vk}> {profile.contacts.vk}</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProfileInfo;