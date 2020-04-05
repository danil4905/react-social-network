import React from 'react';
import classes from './profile.module.css';
import Profile from './profile';
import { connect } from 'react-redux';
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
class ProfileContainer extends React.Component {
    componentDidMount (props) {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 4;
        }
        this.props.getUserProfile(userId);
    }
    render () {
    return (
        <div className={classes.wrapper}>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    )
    }
}
const mapStateToProps = (state) => ({
    profile:state.profilePage.profile
})
let RouterURLContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(RouterURLContainer);
debugger;
