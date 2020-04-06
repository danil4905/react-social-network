import React from 'react';
import classes from './dialogs.module.css';
import { NavLink } from "react-router-dom";

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
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogsItem id={d.id} key={d.id} name={d.name} />
  ));
  let newMessageBody = state.newMessageBody;
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
  let onSendMessageClick = () => {
    props.onSendMessageClick();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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

            className={classes.newMessage}
            placeholder="Write a message..."
            autoFocus></textarea>
          <br></br>
          <button onClick={onSendMessageClick} className={classes.btn}>Send</button>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;