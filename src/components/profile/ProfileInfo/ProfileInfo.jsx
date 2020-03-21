import React from "react";
import photo from '../../../photo.jpg'

const ProfileInfo = (props) => {
    return (
      <div class='profileInfo'>
        <img src={photo} alt="#"  class='profileInfo-Img'/>
        Hello Everyone!
      </div>
    );
}
export default ProfileInfo;