import React, { } from 'react';

// class Test2 extends React.Component {
//     constructor(props) {
//       super(props);
//       this.myRef = React.createRef();
//       this.state = {data: 1};
//       this.handleEvent = this.handleEvent.bind(this);
//     }
//     handleEvent() {
//         this.setState(state => ({
//             data: state.data+1
//           }));
//         console.log(this.myRef.current.innerHTML);
//         this.myRef.current.innerHTML = "Button is clicked " + String(this.state.data) + " times";
//     };
//     render() {
//       return <div>
//           <button type="button" onClick={this.handleEvent}>Click Me</button>
//           <p ref={this.myRef}></p>
//       </div>
//     }
//   }

function Test() {
  const listo = ["fdgdfg", "fdgdfg", "dfghh"];
  
  const ref = [];
  for (let index = 0; index < listo.length; index++) {
    ref.push(React.createRef());
  }

  const FancyButton = React.forwardRef((props, ref) => {
    var temp = [];
    props.listo.map((value, index) => {
      temp.push(<li className="" key={index} ref={ref[index]}>{value}</li>)
    });
    return temp
  });

  function onclick() {
    ref[1].current.className += " anime";
  }


  return <div>
    <button onClick={function () { onclick() }}>Click me</button>
    <FancyButton listo={listo} ref={ref}>Click me!</FancyButton>
  </div>;
}


export default Test