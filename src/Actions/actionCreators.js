export const UPDATE_SCORE_TYPE = "UPDATE_SCORE";

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch({ type: "START_GAME" }),
  selectIngredients: e =>
    dispatch({ type: "SELECT_INGREDIENTS", payload: e.target.id }),
  submitDrink: () => dispatch({ type: "SUBMIT_DRINK" }),
  updateScore: (score, callback) =>
    dispatch({ type: UPDATE_SCORE_TYPE, payload: { score } }, callback)
});

export default mapDispatchToProps;
