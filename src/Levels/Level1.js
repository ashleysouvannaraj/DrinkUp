import React from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../Actions/actionCreators";
import Button from "react-bootstrap/Button";
import "../App.css";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { initialState } from "../reducer";
import axios from "axios";


//Destructured the object and created 
const initialLevelState = ({ drinks }) => ({
  drinks,
  currentDrink: Object.keys(drinks)[0],
  selectedLiquor: [],
  selectedLiquer: [],
  selectedMixers: [],
  selectedGarnishes: [],
  completedDrinks: 0,
  numberOfDrinks: Object.keys(drinks).length,
  startTime: undefined
});

class Level1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialLevelState(props);
  }
//Function running score reduced by amount of time it takes to answer drinks correctly
  points = secondsElapsed => {
    if (secondsElapsed > 60) {
      return 0;
    } else if (secondsElapsed > 40) {
      return 20;
    } else if (secondsElapsed > 30) {
      return 40;
    } else if (secondsElapsed > 20) {
      return 60;
    } else if (secondsElapsed > 10) {
      return 80;
    } else if (secondsElapsed > 0) {
      return 100;
    }
  };

  recordScore = () => {
    axios.post('/scores/record', {
      username: this.props.username,
      points: this.props.score
    })
  }


  checkIngredients = () => {
    const {
      currentDrink,
      drinks: drinkObject,
      startTime,
      selectedLiquor,
      selectedLiquer,
      selectedMixers,
      selectedGarnishes,
      completedDrinks,
      numberOfDrinks
    } = this.state;

    const secondsElapsed = moment().diff(startTime, "seconds");
    const points = this.points(secondsElapsed);

    let mergedIngredients = [
      ...selectedLiquor,
      ...selectedLiquer,
      ...selectedMixers,
      ...selectedGarnishes
    ].sort();

    let m = drinkObject[currentDrink].length;
    let n = mergedIngredients.length;
    if (n !== m) {
      alert("You're missing or have too many ingredients");
    } else if (
      mergedIngredients.join(",").toLowerCase() !==
      drinkObject[currentDrink]
        .sort()
        .join(",")
        .toLowerCase()
    ) {
      alert("These are the wrong Ingredients....try again!!!!");
    } else {
      alert("Great!!!! These are the correct ingredients");
      setTimeout(() => {
        const nextCompletedDrinks = completedDrinks + 1;
        // they have completed all the drinks
        if (numberOfDrinks === nextCompletedDrinks) {
          this.props.updateScore(points);
          const nextLevel = this.props.level + 1;
          if (nextLevel > Object.keys(initialState.levels).length) {
            alert(
              `you are the winner winner chicken dinner: ${this.props.score}`
            );
            let endGame = this.props.endGame;
            endGame();
            this.props.history.push("/Home");
          } else {
            this.props.history.push("/Level" + nextLevel);
          }
          this.setState(initialLevelState(this.props));
        } else {
          // you didn't complete the drinks, lets go to the next drink then.
          this.setState({
            currentDrink: Object.keys(this.props.drinks)[nextCompletedDrinks],
            completedDrinks: nextCompletedDrinks,
            selectedLiquor: [],
            selectedLiquer: [],
            selectedMixers: [],
            selectedGarnishes: []
          });
        }
      }, 100);
    }
  };

  selectLiquor = e => {
    let selectedLiquor = Array.from(
      e.target.selectedOptions,
      option => option.value
    );

    if (!this.state.startTime) {
      this.setState({ startTime: moment(), selectedLiquor });
    } else {
      this.setState({ selectedLiquor });
    }
  };

  selectLiquer = e => {
    let selectedLiquer = Array.from(
      e.target.selectedOptions,
      option => option.value
    );

    if (!this.state.startTime) {
      this.setState({ startTime: moment(), selectedLiquer });
    } else {
      this.setState({ selectedLiquer });
    }
  };

  selectMixers = e => {
    let selectedMixers = Array.from(
      e.target.selectedOptions,
      option => option.value
    );

    if (!this.state.startTime) {
      this.setState({ startTime: moment(), selectedMixers });
    } else {
      this.setState({ selectedMixers });
    }
  };

  selectGarnishes = e => {
    let selectedGarnishes = Array.from(
      e.target.selectedOptions,
      option => option.value
    );

    if (!this.state.startTime) {
      this.setState({ startTime: moment(), selectedGarnishes });
    } else {
      this.setState({ selectedGarnishes });
    }
  };

  render() {
    return (
      <div>
        <h2>Your Score: {this.props.score}</h2>
        
        <h1>
          I would like a <b>{this.state.currentDrink} please</b>
        </h1>
        <div className="container">
          <div id="Liquor">
            <b>Liquor</b>
            <img src={require("../images/liquor.jpg")} alt="liquor" />
            <select
              multiple
              size="13"
              className="list-items"
              value={this.state.selectedLiquor}
              onChange={this.selectLiquor}
            >
              {this.props.ingredients.liquor.sort().map(liquor => (
                <option key={liquor} value={liquor}>
                  {liquor}
                </option>
              ))}
            </select>
          </div>

          <div id="Liquer">
            <b>Liqueur</b>
            <img src={require("../images/liqueur.jpg")} alt="liquer" />
            <select
              multiple
              className="list-items"
              size="11"
              value={this.state.selectedLiquer}
              onChange={this.selectLiquer}
            >
              {this.props.ingredients.liquer.sort().map(liquer => (
                <option key={liquer} value={liquer}>
                  {liquer}
                </option>
              ))}
            </select>
          </div>

          <div id="Mixers">
            <b>Mixers</b>
            <img src={require("../images/mixers.jpg")} alt="mixers" />
            <select
              multiple
              className="list-items"
              size="17"
              value={this.state.selectedMixers}
              onChange={this.selectMixers}
            >
              {this.props.ingredients.mixers.sort().map(mixers => (
                <option key={mixers} value={mixers}>
                  {mixers}
                </option>
              ))}
            </select>
          </div>

          {this.props.hasGarnishes ? (
            <div id="Garnishes">
              <b>Garnishes</b>
              {/** fixme: need garnishes image */}
              <img src={require("../images/mixers.jpg")} alt="garnishes" />
              <select
                multiple
                className="list-items"
                size="17"
                value={this.state.selectedGarnishes}
                onChange={this.selectGarnishes}
              >
                {this.props.ingredients.garnishes.sort().map(garnishes => (
                  <option key={garnishes} value={garnishes}>
                    {garnishes}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
        <Button
          variant="warning"
          className="btn-lg"
          onClick={this.checkIngredients}
        >
          Make Drink
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (
  { isGameStarted, ingredients, levels, score },
  { level }
) => {
  const { drinks, hasGarnishes = false } = levels["Level" + level];
  return {
    isGameStarted,
    ingredients,
    drinks,
    hasGarnishes,
    score
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Level1)
);
