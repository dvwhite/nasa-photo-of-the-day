import React from "react";
import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from "reactstrap";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as moment from 'moment';

const Photo = ({className, data, photoDate, setPhotoDate}) => {
  const incrementDate = () => {
    const tomorrow  = moment(photoDate).add(1, 'days').format('YYYY-MM-DD');
    setPhotoDate(tomorrow);
  }

  const decrementDate = () => {
    const yesterday = moment(photoDate).subtract(1, 'days').format('YYYY-MM-DD');
    setPhotoDate(yesterday);
  }

  // Display a loading message while the data is fetching
if (!data.url) return <h3>Loading...</h3>;
  
  window.scroll({top: 150, left: 0, behavior: 'smooth' });
  return (
    <Card>
      <CardBody>
        <CardImg top width="100%" src={data.url} alt={data.title} />
        <CardTitle><h2>{data.title}</h2></CardTitle>
        <CardSubtitle>
          <FontAwesomeIcon icon={faChevronLeft} onClick={decrementDate} />
          {` ${photoDate} `}
          {moment(photoDate).isBefore(moment().subtract(1, "day")) && <FontAwesomeIcon icon={faChevronRight} onClick={incrementDate}/>}
        </CardSubtitle>  
        <CardText>{data.explanation}</CardText>
      </CardBody>
    </Card>
  );
}

export default Photo;