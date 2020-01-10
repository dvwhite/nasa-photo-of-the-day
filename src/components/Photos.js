import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from './Photo';
import * as moment from 'moment';

// const apiKey = 'DEMO_KEY';
const apiKey = 'G0JxXW0EW98HJMNi4G2bRmloSM4JQchJ7tWBdSH8';
const dateToday = moment().format('YYYY-MM-DD');

const Photos = (props) => {
  const [photoData, setPhotoData] = useState([]);
  const [photoDate, setPhotoDate] = useState(dateToday);
  
  useEffect(() => {
    const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${photoDate}`;
    axios
      .get(apiURL)
      .then(res => {
        setPhotoData(res.data);
        setPhotoDate(res.data.date);
      })
      .catch(err => console.log(err));
  }, [photoDate]);

  return (
    <div className={props.className}>
      <Photo 
        className="img-centered" 
        data={photoData}
        photoDate={photoDate}
        setPhotoDate={setPhotoDate}
      />
    </div>
  );
}

export default Photos;