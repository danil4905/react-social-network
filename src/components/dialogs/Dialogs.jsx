import React from 'react';
import classes from './dialogs.module.css';
import { NavLink } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';

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
const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="newMessageBody" placeholder="Write a message..." className={classes.newMessage} autoFocus={true} />
      <br />
      <button className={classes.btn}>Send</button>
    </form>
  )
}
const NewMessageReduxForm = reduxForm({ form: "newMessageBody" })(NewMessageForm)

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogsItem id={d.id} key={d.id} name={d.name} />
  ));
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
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
          <NewMessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
}
export default Dialogs;