import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from './Photo';

const apiKey = 'DEMO_KEY';
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const Photos = (props) => {
  const [photoData, setPhotoData] = useState([]);
  useEffect(() => {
    axios
      .get(apiURL)
      .then(res => {
        setPhotoData(res.data)
      })
      .catch(err => console.log(err));
  }, []);
  console.log("PhotoData:", photoData)
  const obj = photoData;
  console.log("obj:", obj)

  return (
    <div className={props.className}>
      <Photo className="img-centered" src={photoData.url} alt={photoData.explanation}/>
    </div>
  );
}

export default Photos;