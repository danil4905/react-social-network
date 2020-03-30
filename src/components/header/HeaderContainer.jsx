import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Header from './header';
import { setUserData } from '../../redux/auth-reducer';
class HeaderContainer extends React.Component {
    componentDidMount(props) {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then( Response => {
            if (Response.data.resultCode === 0) {
                this.props.setUserData(Response.data.data.login)
            }
        })
    }
    render() {
           return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => {
}   
debugger;
export default connect(mapStateToProps, {setUserData})(HeaderContainer);