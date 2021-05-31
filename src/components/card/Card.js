import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className='card-container'>
      <img
        alt=''
        src={`https://robohash.org/${props.item.id}?set=set2&size=180x180`}
      />
      <h3>{props.item.email}</h3>
      <p>{props.item.company.name}</p>
    </div>
  );
};
export default Card;
