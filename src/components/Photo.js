import React from "react";
import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from "reactstrap";

const Photo = ({className, data}) => {
  // Date formatting
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(data.date).toLocaleDateString("en-US", options);

  return (
    <Card>
      <CardBody>
        <CardImg top width="100%" src={data.url} alt={data.title} />
        <CardTitle><h2>{data.title}</h2></CardTitle>
        <CardSubtitle>{formattedDate}</CardSubtitle>
        <CardText>{data.explanation}</CardText>
      </CardBody>
    </Card>
  );
}

export default Photo;