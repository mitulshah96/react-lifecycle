import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0
    };
  }
  forceupdateHandler = () => {
    this.forceUpdate();
  };

  findDOMNodeHandler = () => {
    var mydiv = document.getElementById("myDiv");
    ReactDOM.findDOMNode(mydiv).style.color = "green";
  };

  setNewNumber = () => {
    this.setState({
      data: this.state.data + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.forceupdateHandler}>Force Update</button>
        <button onClick={this.findDOMNodeHandler}>DomNode</button>
        <h4>Random Number:{Math.random()}</h4>
        <div id="myDiv">Node</div>
        <button onClick={this.setNewNumber}>Increment</button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log("I am called before rendering");
  }

  componentDidMount() {
    console.log("I am called After rendering");
  }

  componentWillReceiveProps(newProps) {
    console.log(
      "I am called as soon as props are updated before another render is called"
    );
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("Return true or false");
    return true;
  }

  componentWillUpdate(newProps, newState) {
    console.log("I am called before new rendering");
  }

  componentDidUpdate(prevProp, preState) {
    console.log("Component DID updated");
  }

  componentWillUnmount() {
    console.log("Cleaning up all the DOM");
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default App;
