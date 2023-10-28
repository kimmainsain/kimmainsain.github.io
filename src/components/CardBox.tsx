import React from "react";
import "../styles/cardBox.scss";

type CardBoxProps = {
  img: string;
  head: string;
  body: string;
  view: boolean;
};

const CardBox = (props: CardBoxProps) => {
  return (
    <div className="card-box">
      <div className="card-contents">
        {props.view && (
          <img src={props.img} alt="profile" className="card-img" />
        )}
        <div className="card-explain">
          <div className="card-explain-head">{props.head}</div>
          <div className="card-explain-body">{props.body}</div>
        </div>
        {!props.view && (
          <img src={props.img} alt="profile" className="card-img" />
        )}
      </div>
    </div>
  );
};

export default CardBox;
