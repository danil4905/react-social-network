import React from 'react';
import Axios from 'axios';
import avatar from '../../avatar.png';
import classes from './NewUsers.module.css';

class NewUsers extends React.Component {

    componentDidMount(props) {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(Response => {
            this.props.setUsers(Response.data.items);
            this.props.setUsersTotalCount(Math.ceil(Response.data.totalCount /10));

        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(Response => {
            this.props.setUsers(Response.data.items);
        })
    }
    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages =[];
        for (let i = 1; i <= pageCount; i++) {
                pages.push(i);
        }
        return (
            <div> <h3 className={classes.title}> New Users</h3>
                
                <div className={classes.page_wrapper}>
                    {
                        this.props.users.map(user =>
                            <div key={user.id} className={classes.user_item}>
                                <div className={classes.left}>
                                    <img src={user.photos.small != null ? user.photos.small : avatar} className={classes.avatar} alt="#" />
                                    <div className={classes.btn_wrapper}>
                                        {user.followed ? <button className={classes.btn_unfollow} onClick={() => { this.props.unfollow(user.id) }}>Unfolow</button>
                                            : <button className={classes.btn_follow} onClick={() => { this.props.follow(user.id) }}>Follow</button>}
                                    </div>
                                </div>
                                <div className={classes.right}>
                                    <div className={classes.user_name}>{user.name}</div>
                                    <div>Status</div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && classes.selectedPage}
                        onClick={() => { this.onPageChanged(p)}}>{p}</span>
                })}
            </div>
        );
    }
}
export default NewUsers;