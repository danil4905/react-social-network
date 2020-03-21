import React from 'react';
import { mapDispatchToProps } from "./NewUsersContainer";

const NewUsers = (props) => {
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}> <img src='#' alt='#'/> 
                    <div>{user.fullName}</div>
                    <div> {user.followed ? <button onClick={() => {props.unfollow(user.id)}}>Unfolow</button> : <button onClick={() => {props.follow(user.id)}}>Follow</button> }</div>
                </div>)
            }
        </div>
    );
}
export default NewUsers;