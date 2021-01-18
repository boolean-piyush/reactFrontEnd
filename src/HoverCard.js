import React from "react";
import "./stylesheets/HoverCardEffect.css";
// import { ReactComponent as Taken } from "./images/alienAbduction.svg";
import coder from "./images/coder.png";
import movieNight from "./images/movieNight.svg";
import todoSVG from "./images/todoSVG.png";
import piyush from "./images/piyush-passport-new.jpg";

function HoverCard() {
  const names = [
    {
      name: movieNight,
      heading: "Browse Movies",
      subHeading: "Rest API with React",
      description: "Search any movies. Watch rating, votes and popularity with Rest API and React.",
      link:"/browse-movies",
      target:""
    },
    {
      name: todoSVG,
      heading: "Make To-Do List",
      subHeading: "React, CSS and Javascript",
      description: "Responsive todo list with CSS animations and React Javascript",
      link:"/todo-app",
      target:""
    },
    {
      name: coder,
      heading: "Github Repository",
      subHeading: "Github",
      description: "Github link to source code linked to AWS Amplify Cloud.",
      link:"https://github.com/boolean-piyush/reactFrontEnd",
      target:"_blank"
    },
    {
      name: piyush,
      heading: "Piyush Ratan",
      subHeading: "Born 1995",
      description: "I am a Full Stack Website developer living in Lucknow.",
      link:"",
      target:""
    },
  ];

  const Com = () => {
    let len = names.length;
    var temp = [];
    for (let index = 0; index < len; index++) {
      const element = names[index];
      temp.push(
        <div
          key={index}
          className="eight wide mobile five wide tablet four wide computer column"
        >
          <div className="card">
            
            <img
              className="image"
              width="100%"
              height="200px"
              src={element.name}
              alt="cardImage"
            />

            <div className="content">
              {/* <Glitter className="glitter"/> */}
              <h3>{element.heading}</h3>
              <a className="subHeading" href={element.link!==""?element.link:null} target={element.target}>Click Here</a>
              <p>{element.description}</p>
            </div>

            <div className="socialDetail">
              <p className="joined"><i className="calendar icon"></i>Jan 2021</p>
              <p className="friends">
                <i className="user icon"></i>Born 1995
              </p>
            </div>
          </div>
        </div>
      );
    }
    return temp;
  };

  return (
    <div className="ui container hoverCards">
      <h1>CardOpedia</h1>
      <div className="ui centered grid">
        <Com />
      </div>
      <br />
    </div>
  );
}

export default HoverCard;
