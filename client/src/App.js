import React from 'react';
import axios from 'axios';
import AddToCart from './components/addToCart.js';
import AboutThisGame from './components/aboutThisGame.js';
import style from './css/App.css';
import SystemReqs from './components/systemReqs.js';
import ITGRTY from './components/isThisGameRTY.js';
import Attributes from './components/attributes.js';
import Languages from './components/languages.js';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentGame: null,
    }

    this.getGameData = this.getGameData.bind(this);
  }

  componentDidMount(){
    this.getGameData();
  }

  getGameData(){
    axios.get('http://localhost:3000/moist-air/game')
    .then((res)=>{
      this.setState({
        currentGame: res.data[0]
      })
    })
  }

  render(){
    if(!this.state.currentGame){
      return<div></div>
    }
    return (
      <div id="appContainer">
        <div id="leftSide"></div>
        <div className="App">
        <div id="infoCol">
            <AddToCart gameData = {this.state.currentGame}/>
           <AboutThisGame gameData = {this.state.currentGame}/>
           <SystemReqs gameData = {this.state.currentGame}/>
        </div>
        <div id="pannelCol">
          <ITGRTY/>
          <Attributes gameData = {this.state.currentGame}/>
          <Languages gameData = {this.state.currentGame}/>
        </div>
        </div>
        <div id="rightSide"></div>
      </div>
    );
  }
}

export default App;
