import React from "react";

let count = 0;

export default class Counter extends React.Component {
  plus() {
    count++;
    document.querySelector(".count").innerHTML = "The count is: " + count;
  }

  minus() {
    count--;
    document.querySelector(".count").innerHTML = "The count is: " + count;
  }

  render() {
    return (
      <div>
        <h1>This is my counter</h1>
        <h5>{this.props.header}</h5>
        <p className="count">The count is: 0</p>
        <button onClick={this.plus} className="plus">
          +
        </button>
        <button onClick={this.minus} className="minus">
          -
        </button>
      </div>
    );
  }
}
