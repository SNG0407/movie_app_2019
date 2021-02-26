import React from "react";
import PropTypes from "prop-types";


class App extends React.Component {
  state = {
    count : 0
  };
  add = () => {
    this.setState(current => ({count: current.count +1}));
    // this.setState({count : this.state.count +1}); 구시대 방법
  }

minus = () => {
  this.setState(current => ({count: current.count -1}));
  };

  componentDidMount() {
    console.log("DidMount ");
  }
  componentDidUpdate(){
    console.log("Did Update");
  }
  render() {
    console.log("Did render");
    return(
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  } 
}
export default App;
