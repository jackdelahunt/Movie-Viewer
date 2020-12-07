import React from "react";
import "./movieDetails.css";


export default ({ actor }) => {
  return (
    <>
      <h4>Overview</h4>
      <ul className="list-group list-group-vertical">
        <ul className="list-group list-group-horizontal">
          <li key="ruh" className="list-group-item list-group-item-dark">
            Birthday (yy/mm/dd)
          </li>
          <li key="rut" className="list-group-item ">
            {actor.birthday}
          </li>
        </ul>
        {actor.deathday ?
        <ul className="list-group list-group-horizontal">
          <li key="ruh" className="list-group-item list-group-item-dark">
            Deathday (yy/mm/dd)
          </li>
          <li key="rut" className="list-group-item ">
            {actor.deathday}
          </li>
        </ul> : <></>}
        <ul className="list-group list-group-horizontal">
          <li key="rdh" className="list-group-item list-group-item-dark">
            Place of Birth
          </li>
          <li key="rdv" className="list-group-item ">
            {actor.place_of_birth}
          </li>
        </ul>
        <p>{actor.biography}</p>
      </ul>
      </>
  );
};