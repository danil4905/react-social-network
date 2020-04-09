import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, togleFollowingProgress } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from "redux";
import { getUsersThunk } from '../../redux/users-reducer';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/users-selectors";
class NewUsersContainer extends React.Component {

    componentDidMount(props) {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
            <h3 style={{ margin: '10px' }} className={'title'}> New Users</h3>
            {this.props.isFetching ? <Preloader /> :
                <Users onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalCount={this.props.totalCount}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    togleFollowingProgress={this.props.togleFollowingProgress}
                    followingInProgress={this.props.followingInProgress} />}
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(

    connect(mapStateToProps, { follow, unfollow, setCurrentPage, togleFollowingProgress, getUsersThunk })
)(NewUsersContainer) 