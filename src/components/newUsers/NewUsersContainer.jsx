import React from 'react';
import { connect } from 'react-redux';
import NewUsers from "./NewUsers";
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}
debugger;
const NewUsersContainer = connect(mapStateToProps, mapDispatchToProps)(NewUsers);
export default NewUsersContainer;