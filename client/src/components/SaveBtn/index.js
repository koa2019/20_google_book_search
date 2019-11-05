import React from "react";
// import "./styles.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <span className="btn btn-secondary save-btn float-sm-right mx-2" {...props} role="button" tabIndex="0">
      Save
    </span>
  );
}

export default SaveBtn;
