import React from "react";

const Photo = (props) => {
  return (
    <a href={props.src}>
      <img className={props.className} src={props.src} alt={props.alt} />
    </a>
  );
}

export default Photo;