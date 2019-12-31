import React from "react";

const Photo = (props) => {
  return (
    <img className={props.className} src={props.src} alt={props.alt} />
  );
}

export default Photo;