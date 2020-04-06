import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent';
class ProfileContainer extends React.Component {
    componentDidMount(props) {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 4;
        }
        this.props.getUserProfile(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let RouterURLContainer = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, { getUserProfile })(RouterURLContainer);
