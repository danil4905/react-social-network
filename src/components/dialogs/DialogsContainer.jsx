import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
};
let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;