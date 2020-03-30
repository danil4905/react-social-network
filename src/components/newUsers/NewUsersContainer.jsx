import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, togleIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getUsers } from '../../api/api';
debugger;
class NewUsersContainer extends React.Component {

    componentDidMount(props) {
        this.props.togleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(Math.ceil(data.totalCount / 10));
            this.props.togleIsFetching(false);
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.togleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.togleIsFetching(false);
            this.props.setUsers(data.items);

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

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, togleIsFetching })(NewUsersContainer);