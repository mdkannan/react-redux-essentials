import React from "react";
import { connect } from "react-redux";
import {showlist, showtable } from '../actions/user';

class First extends React.Component {

  constructor() {
        super();
    this.reactmethod=this.reactmethod.bind(this);

    }


    reactmethod(){

        this.props.showlist();

        // setTimeout(() =>  this.props.showtable(), 5000);


    }

  render() {
    return (
      <div>
        <h1> Show Population chart</h1>
        <button onClick={this.reactmethod}>
        Toggle Chart
        </button>
      </div>
    );
  }
}




export default connect(null, {showtable, showlist})(First);
