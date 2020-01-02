import React from "react";
import Photo from './Photo';

const testURL = 'https://apod.nasa.gov/apod/image/2001/BetelgeuseImagined_EsoCalcada_960.jpg';

const Photos = (props) => {
  return (
    <div className={props.className}>
      <Photo className="img-centered" src={testURL} alt="Test url"/>
    </div>
  );
}

export default Photos;