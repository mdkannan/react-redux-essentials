import React from "react";
import { connect } from "react-redux";
import {showlist,oslo_population } from '../actions/user';

class List extends React.Component {

  constructor(props) {
        super(props);
         this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    console.log(event.target.value);

    }

    handleSubmit(event) {
      //this.state.value
      let value=this.state.value
        this.props.oslo_population(value);
      event.preventDefault();
    }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
    <label>
    Edit Population For Oslo:
      <input type="text" value={this.state.value} pattern="[0-9]*" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />

    </form>


      </div>
    );
  }
}

function mapStateToProps(state) {

    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {oslo_population})(List);
