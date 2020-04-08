import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent';
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount(props) {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
export default compose(
    connect(mapStateToProps, {
        getUserProfile, getStatus,
        updateStatus
    }),
    withRouter
)(ProfileContainer);
