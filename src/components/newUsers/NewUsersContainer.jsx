import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, togleIsFetchingAC } from '../../redux/users-reducer';
import Axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
class NewUsersContainer extends React.Component {

    componentDidMount(props) {
        this.props.togleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(Response => {
            this.props.setUsers(Response.data.items);
            this.props.setUsersTotalCount(Math.ceil(Response.data.totalCount / 10));
            this.props.togleIsFetching(false);
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.togleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(Response => {
            this.props.togleIsFetching(false);
            this.props.setUsers(Response.data.items);

        })
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
                unfollow={this.props.unfollow} />
        </>
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        togleIsFetching: (isFetching) => {
            dispatch(togleIsFetchingAC(isFetching))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewUsersContainer);