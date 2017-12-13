import React, { Component } from 'react';
import LoccountEntry from './LoccountEntry';
export default class LoccountTable extends React.Component {

  componentDidMount(){
      fetch("http://localhost:3000/api/loccount/entries")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        Hello {this.props.name}
        <LoccountEntry />
      </div>
    );
  }
}
