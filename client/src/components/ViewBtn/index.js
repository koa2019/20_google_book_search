import React from "react";
// import "./styles.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
  return (
    <span className="btn btn-secondary view-btn mx-2 float-right" {...props} role="button" tabIndex="0">
      View
    </span>
  );
}

export default ViewBtn;
