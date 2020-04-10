import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { compose } from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) { this.props.history.push('/login') }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount(props) {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto} profile={this.props.profile} 
                    status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})
export default compose(
    connect(mapStateToProps, {
        getUserProfile, getStatus,
        updateStatus, savePhoto
    }),
    withRouter
)(ProfileContainer);
