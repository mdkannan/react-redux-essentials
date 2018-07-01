import React, { Component } from 'react';
import logo from './logo.svg';
import ShowPopulation from './comp/ShowPopulation';
// import InputForm from './comp/InputForm';
import Chart from './comp/Chart';
import { connect } from "react-redux";

import './App.css';

class App extends Component {

  render() {
    console.log(this.props.user.showlist );
    return (
      <div className="App">


        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
                <ShowPopulation/>

                 {this.props.user.showlist ? <Chart/> : null}


            </div>



      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log();
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(App);
