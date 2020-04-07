import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, togleFollowingProgress } from '../../redux/users-reducer';
import Users from './Users';
import { withAuthRedirect } from "../../hoc/withAuthRedirectComponent";
import Preloader from '../common/Preloader/Preloader';
import { compose } from "redux";
import { getUsersThunk } from '../../redux/users-reducer';
class NewUsersContainer extends React.Component {

    componentDidMount(props) {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                togleFollowingProgress={this.props.togleFollowingProgress}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, togleFollowingProgress, getUsersThunk })
)(NewUsersContainer) 