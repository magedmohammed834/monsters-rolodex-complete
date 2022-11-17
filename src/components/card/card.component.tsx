import React from "react";
import { Monster } from "../../App";
import "./card.styles.css";

type CardProps = {
  monster: Monster;
};
export const Card = ({ monster }: CardProps) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2> {name} </h2>
      <p> {email} </p>
    </div>
  );
};
