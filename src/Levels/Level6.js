import React, {useState} from 'react';
import { connect } from "react-redux";
import mapDispatchToProps from "../Actions/actionCreators";
import Button from 'react-bootstrap/Button'
import "../App.css";
import {withRouter } from "react-router-dom";

class Level6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Level6Drinks: props.Level6Drinks,
      currentDrink: Object.keys(props.Level6Drinks)[0],
      selectedLiquor: [],
      selectedLiquer: [],
      selectedMixers: [],
      selectedGarnishes: [],
      counter: 1,
      counter2: 0
    }
    
  }

  // let drinkArray = [drink1, drink2, drink3];
  // const randomDrink = drinkArray[Math.floor(drinkArray.length * Math.random())]

  componentDidMount() {
    
  }

  // handleSelectedIngredients = (e) => {
  //   let value = Array.from(e.target.selectedOptions, option => option.value);
    
  // }

  // randomizeDrink = (e) => {
  //   randomDrink = this.state.currentDrinks[Math.floor(this.state.currentDrinks.length * Math.random())]
  // }


checkIngredients = (e) => {
  let liquors = this.state.selectedLiquor;
  let liquers = this.state.selectedLiquer;
  let mixers = this.state.selectedMixers;

  let mergedIngredients = liquors.concat(liquers, mixers);

      
      let currentDrink = this.state.currentDrink;
      let drinkObject = this.state.Level6Drinks;
      let m = drinkObject[currentDrink].length;
      let n = mergedIngredients.length;
      
      if (n != m) {
        alert("Your missing or have too many ingredients");
      } else if (mergedIngredients.sort().join(",") != drinkObject[currentDrink].sort().join(",")) {
        alert("These are the wrong Ingredients....try again!!!!");
      } else {
        alert("Great!!!! These are the correct ingredients");
        if (this.state.counter == 3) {
          alert("GET READY FOR LEVEL 7")
          this.props.history.push("/Level7")
        }
        this.setState({
          currentDrink: Object.keys(this.props.Level6Drinks)[this.state.counter2+1],
          selectedLiquor: [],
         selectedLiquer: [],
         selectedMixers: [],
         counter: this.state.counter+1,
         counter2: this.state.counter2+1
        })
    
      }
}


selectLiquor = (e) => {
  let value = Array.from(e.target.selectedOptions, option => option.value);
  this.setState({selectedLiquor: value});
}

selectLiquer = (e) => {
  let value = Array.from(e.target.selectedOptions, option => option.value);
  this.setState({selectedLiquer: value});
}

selectMixers = (e) => {
  let value = Array.from(e.target.selectedOptions, option => option.value);
  this.setState({selectedMixers: value});
}

  
  render () {


    return (
      
      <div>
          <h1>I would like a <b className="animated zoomIn">{this.state.currentDrink} please</b></h1>
        
        <div className="container">
        <div id="Liquor">
        <b>Liquor</b>
        <img src={require('../images/liquor.jpg')}/>
            <select multiple size="13" className="list-items" onChange={(e) => this.selectLiquor(e)}>
              {this.props.ingredients.liquor.sort().map((liquor, i) => (<option key={i} value={liquor}>{liquor}</option>))}
            </select>
            </div>
            
            <div id="Liquer">
            <b>Liquer</b>
            <img src={require('../images/liqueur.jpg')}/>
            <select multiple className="list-items" size="11" onChange={(e) => this.selectLiquer(e)}>
              
              {this.props.ingredients.liquer.sort().map((liquer, i) => (<option key={i} value={liquer}>{liquer}</option>))}
            </select>
            </div>

            <div id="Mixers">
            <b>Mixers</b>
            <img src={require('../images/mixers.jpg')}/>
            <select multiple className="list-items" size="17" onChange={(e) => this.selectMixers(e)}>
              
            {this.props.ingredients.mixers.sort().map((mixers, i) => (<option key={i}  value={mixers}>{mixers}</option>))}
            </select>
            </div>

        </div>
        <Button variant="warning" className="btn-lg" onClick={() => this.checkIngredients()}>Make Drink</Button>
        </div>
    )
  }
  }


  const mapStateToProps = (state) => ({
    isGameStarted: state.isGameStarted,
    ingredients: state.ingredients,
    Level6Drinks: state.drinks.Level6,
  
  })

  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
    )(Level6));