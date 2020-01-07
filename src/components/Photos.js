import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from './Photo';

const apiKey = 'DEMO_KEY';
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const Photos = (props) => {
  const [obj, setObj] = useState();
  useEffect(() => {
    axios
      .get(apiURL)
      .then(res => {
        setObj(res)
      })
      .catch(err => console.log(err));
  }, []);
  console.log(obj)

  return (
    <div className={props.className}>
      <Photo className="img-centered" src={obj} alt={obj}/>
    </div>
  );
}

export default Photos;