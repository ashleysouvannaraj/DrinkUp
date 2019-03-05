import React, {useState} from 'react';

let Level1 = (props) => {
    let [drink1] = useState("Gin and Tonic");
    let [drink2] = useState("Rum and Coke");
    let [drink3] = useState("Vodka Soda");

    

    return (
      <div>
        I would like a Rum and Coke please
        <select className="liquor">
          {props.ingredients.liquor.map((liquor) => <option value={liquor}>{liquor}</option>)}
        </select>
        <select className = "liquer">
          {props.ingredients.liquer.map((liquer) => <option value={liquer}>{liquer}</option>)}
        </select>
        <select className = "mixers">
        {props.ingredients.mixers.map((mixers) => <option value={mixers}>{mixers}</option>)}
        </select>
      </div>
    )
  }

  export default Level1;