import React from "react";
import { List } from "semantic-ui-react";

function JsonToList(props) {
  var myObj;
  if (typeof props.jsonData !== "object") {
    try {
      myObj = JSON.parse(props.jsonData);
    } catch (error) {
      console.log("GOT JSON ERROR");
    }
  } else {
    myObj = props.jsonData;
  }
  const mainTemplate = <List>{listRender(myObj)}</List>;
  return mainTemplate;
}

function resolveObject(value) {
  if (typeof value === "object") {
    return <List.List>{listRender(value)}</List.List>;
  } else {
    return <List.Description>{parseContent(value)}</List.Description>;
  }
}

function listRender(myObj) {
  var template = [];
  var i = 0;
  for (const property in myObj) {
    template[template.length] = (
      <List.Item key={i}>
        <List.Icon name="folder" />
        <List.Content>
          <List.Header>{property}</List.Header>
          {resolveObject(myObj[property])}
        </List.Content>
      </List.Item>
    );
    i += 1;
  }
  return template;
}
const imgStyle = {
  maxWidth: "100%",
  minWidth: "300px",
  height: "auto",
};

function parseContent(value) {
  var imgPattern = /(png|jpg|jpeg|svg)/;
  var httpPattern = /http/;
  if (imgPattern.test(value)) {
    return (
      <img
        style={imgStyle}
        src={"https://image.tmdb.org/t/p/w342/" + value}
        alt="poster"
      />
    );
  } else if (httpPattern.test(value)) {
    return (
      <a href={value} rel="noreferrer" target="_blank">
        Click Here to Go
      </a>
    );
  } else {
    return value;
  }
}

export default JsonToList;
