export const UPDATE_SCORE_TYPE = "UPDATE_SCORE";
export const LOGGING_IN_TYPE = "LOGGING_IN";

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch({ type: "START_GAME" }),
  endGame: () => dispatch({type: "END_GAME"}),
  selectIngredients: e =>
    dispatch({ type: "SELECT_INGREDIENTS", payload: e.target.id }),
  submitDrink: () => dispatch({ type: "SUBMIT_DRINK" }),
  updateScore: (score, callback) =>
    dispatch({ type: UPDATE_SCORE_TYPE, payload: { score } }, callback),
    login: (loggedInUser) => dispatch({type: "LOGGING_IN", payload: {loggedInUser}}),
    logout: () => dispatch({type: "LOG_OUT"})
});

export default mapDispatchToProps;
