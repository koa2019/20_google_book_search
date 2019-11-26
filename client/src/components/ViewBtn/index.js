import React from "react";
// import "./styles.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
  return (
    <a className="btn btn-secondary view-btn mx-2 float-right" {...props} role="button" tabIndex="0"
    href={"https://books.google.com/books?id=" + props.id}>
      View
    </a>
  );
}

export default ViewBtn;
