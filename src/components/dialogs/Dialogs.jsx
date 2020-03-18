import React from 'react';
import classes from './dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogsItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={classes.message}>{props.message}</div>;
};


const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map(d => (
    <DialogsItem id={d.id} name={d.name} />
  ));

  let messagesElements = props.messages.map(m => <Message message={m.message} />);

  let newMessageElement = React.createRef();

  let newMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }
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
            ref={newMessageElement}
            name="newMessage"
            cols="30"
            rows="3"
            className={classes.newMessage}
            placeholder="Write a message..."
            autoFocus></textarea>
          <br></br>
          <button onClick={newMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;