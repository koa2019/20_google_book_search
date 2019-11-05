import React from "react";
// import "./styles.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="btn btn-secondary delete-btn float-right mx-1" {...props} role="button" tabIndex="0">
      Delete
    </span>
  );
}

export default DeleteBtn;
