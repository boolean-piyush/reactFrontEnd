import React from "react";
import "./stylesheets/HoverCardEffect.css";
import { ReactComponent as Glitter } from "./images/glitter.svg";
import { ReactComponent as Taken } from "./images/alienAbduction.svg";

function HoverCard() {
  const ref = React.useRef(null);

  function setClassToFly(){
      ref.current.setAttribute('class', 'spaceship spaceshipFly');
      setTimeout(() => {
        ref.current.setAttribute('class', 'spaceship');
      }, 5000);
  }

  return (
    <div>
      <Taken ref={ref} className="spaceship"></Taken>
      <div className="wrapper">
        <Glitter></Glitter>
        <div className="container" id="c0">
          <div className="story" id="s0">
            <div className="info">
              <h3>Pyramids</h3>
              <p>
                Built during a time when Egypt was one of the richest and most
                powerful civilizations in the world. Their massive scale
                reflects the unique role that the pharaoh played in ancient
                Egyptian society.
              </p>
              <button type="button" onClick={function(){setClassToFly()}}>Take me</button>
            </div>
          </div>
        </div>

        <div className="container" id="c1">
          <div className="story" id="s1">
            <div className="info">
              <h3>Stonehenge</h3>
              <p>
                Stonehenge is a prehistoric monument in Wiltshire, England. It
                was constructed in several stages between 3000 and 1500 B.C.,
                spanninng to the Bronze Age.
              </p>
              <button type="button" onClick={function(){setClassToFly()}}>Take me</button>
            </div>
          </div>
        </div>
        <div className="container" id="c2">
          <div className="story" id="s2">
            <div className="info">
              <h3>Tower of Pisa</h3>
              <p>
                The Leaning Tower of Pisa or simply the Tower of Pisa is the
                campanile, or freestanding bell tower, of the cathedral of the
                Italian city of Pisa, known worldwide for its unintended tilt
              </p>
              <button type="button" onClick={function(){setClassToFly()}}>Take me</button>
            </div>
          </div>
        </div>
        <div className="page">
          <h4>Hover the card</h4>
          <ul>
            <li>{"<<<"}</li>
            <li>{">>>"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HoverCard;
