//ValidationError that accepts a property called message, which contains the validation message to be displayed. If message is a string, display the message, otherwise it is is undefined return an empty fragment.
import React from "react";

export default function ValidationError(props) {
  if (props.message) {
    return <div className="error">{props.message}</div>;
  }

  return <></>;
}
