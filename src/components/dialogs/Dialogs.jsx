import React from 'react';
import classes from './dialogs.module.css';
import { NavLink } from "react-router-dom";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";

let DialogsItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
let Message = props => {
  return <div className={classes.message}>{props.message}</div>;
};



const Dialogs = (props) => {
  debugger;
  let state = props.store.state.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogsItem id={d.id} name={d.name} />
  ));
  let newMessageBody = state.newMessageBody;
  let messagesElements = state.messages.map(m => <Message message={m.message} />);
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.dialogsItems}>
        <h3>Dialogs</h3>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div className={classes.recentMessages}>
          <h4>Messages</h4>
          {messagesElements}
        </div>
        <div className={classes.newMessage}>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            cols="30"
            rows="3"
            className={classes.newMessage}
            placeholder="Write a message..."
            autoFocus></textarea>
          <br></br>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;