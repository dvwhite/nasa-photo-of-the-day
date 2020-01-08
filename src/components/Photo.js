import React from "react";

const Photo = ({className, data}) => {
  // Date formatting
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(data.date).toLocaleDateString("en-US", options);

  return (
    <div className="card">
      <h3>{formattedDate}</h3>
      <a href={data.url}>
        <img className={className} src={data.url} alt={data.title} />
      </a>
      <h2>{data.title}</h2>
      <p class="copyright">Copyright: {data.copyright}</p>
      <p><span class="bold">Explanation: </span>{data.explanation}</p>
    </div>
  );
}

export default Photo;