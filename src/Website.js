// import logo from './images/logo.svg';
import './stylesheets/App.css';
import React, { useState } from 'react';
import { Button, Container, Input, Grid, Icon } from 'semantic-ui-react';
import {ReactComponent as ChecklistGirl} from './images/checklistGirl.svg';
import headingPic from './images/heading.jpg';

function Website() {

  const [todos, setTodos] = useState(["Exercise", "Bath","Cycling"]);
  const [input, setInput] = useState('');
  const refsLib = [];
  for (let index = 0; index < todos.length; index++) {
    refsLib.push(React.createRef());
  }

  function deletion(index) {
    setTimeout(() => {
      var len = todos.length;
      let temp = (todos.slice(0, index)).concat(todos.slice(index + 1, len));
      setTodos(temp);
    }, 1000);
    try {
      refsLib[index].current.className +=" anime";
      console.log(refsLib[index].current);
    } catch (error) {
      console.log(error);
    }
  };

  function addition() {
    if (input !== '') {
      let temp = todos.concat([input]);
      setInput('');
      setTodos(temp);
    }
  };

  const segmentStyle = {
    "border-style": 'solid',
    "border-color":"purple",
    "border-radius":"5px"
  };

  const RenderItems = React.forwardRef((props, ref) => {
    var temp = [];
    let len = props.todos.length;
    for (let index = 0; index < len; index++) {
      const element = props.todos[index];
      temp.push(
        <div ref={ref[index]} style={segmentStyle} className="ui center aligned green inverted segment" color="green" key={index}>
          <Icon name='newspaper outline' size='large' />&nbsp;<span className='notes'>{element}</span>
          <Button color='red' floated='right' size='mini' onClick={function () { deletion(index) }}>Del &nbsp; <Icon name='trash'></Icon></Button>
        </div>)
    }
    return temp;
  });

  const addInput =
    <Container textAlign='right'>
      <Grid>
        <Grid.Row columns="equal">
          <Grid.Column width={13}>
            <Input style={{"padding-left":"20px"}} fluid size='mini' placeholder='Add here' type="text" value={input} onKeyUp={(event) => event.keyCode === 13 ? addition() : false} onChange={(e) => setInput(e.target.value)} />
          </Grid.Column>
          <Grid.Column >
            <Button style={{"padding-right":"-20px"}}  primary size='tiny' onClick={function () { addition() }}>Add &nbsp; <Icon name='plus'></Icon></Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    ;

  return (

    <Container className="mainPage">
      <Container>
        <Grid>
          <Grid.Row>
          <Grid.Column width={9} className="heading" verticalAlign="middle">
          <img src={headingPic} alt="To Do List"></img>
          </Grid.Column>
          <Grid.Column width={7}>
          <ChecklistGirl />
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <br /><br />
      <Container>
        <div>
          <RenderItems todos={todos} ref={refsLib}></RenderItems>
        </div><br />
        {addInput}
      </Container>
    </Container>


  );
}

export default Website;
