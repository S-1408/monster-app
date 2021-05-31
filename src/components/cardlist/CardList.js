import React from "react";
import Card from "../card/Card";
import "./CardList.css";
const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.users.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};
export default CardList;
