import React from 'react';
import classes from './profile.module.css';
import Profile from './profile';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
class ProfileContainer extends React.Component {
    componentDidMount () {
        let userId = this.props.match.params.userId;
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(Response => {
            this.props.setUserProfile(Response.data);
        })
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
export default connect(mapStateToProps, { setUserProfile })(RouterURLContainer);
debugger;
