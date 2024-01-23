import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    console.log(this.state.count);
    return (
      <div>
        <h2 className="p-2 m-2">Name: {this.props.name}</h2>
        <h2 className="p-2 m-2">Location: {this.props.location}</h2>
        <h2 className="p-2 m-2">Connect: {this.props.contact}</h2>
        <button
          className="p-2 m-2  bg-blue-300 text-white"
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decreement
        </button>
        <h2 className="p-2 m-2">Count: {this.state.count}</h2>
        <button
          className="p-2 m-2 bg-blue-300 text-white"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increement
        </button>
      </div>
    );
  }
}

export default UserClass;
