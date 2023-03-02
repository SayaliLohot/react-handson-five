import { Component, PureComponent } from "react";

class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      name: "hii",
    };
  }

  handleChangeName = () => {
    console.log("handleChangeName call");
    this.setState({ name: "Hii changed to hello",value:12 });
  };

  render() {
    console.log("render has been called");
    return (
      <div>
        <h1>Simple Component</h1>
        <h2>Name: {this.state.name}</h2>
        <h3>Value: {this.state.value}</h3>
        <button onClick={this.handleChangeName}>Change Name</button>
      </div>
    );
  }
}

export default PureComp;