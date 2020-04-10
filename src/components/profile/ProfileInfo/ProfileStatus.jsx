import React from 'react';
import { useState } from 'react';


//     componentDidUpdate (prevProps,prevState) {
//         if (prevProps.status !== this.props.status){
//             this.setState({
//                 status:this.props.status
//             });
//         }
//     }

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

   let  activateEditMode= () => {
        setEditMode(true);
    }
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    function onStatusChange (e) {
        setStatus(e.currentTarget.value);
    }
    return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "---"}</span>
                    </div>
              }
               {editMode &&
                   <div>
                       <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                   </div>
               }
           </div>
      )
}

export default ProfileStatus;