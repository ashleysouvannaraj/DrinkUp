const mapDispatchToProps = (dispatch) => ({
    startGame: () => dispatch({type:'START_GAME'}),
    selectIngredients: (e) => dispatch({type: 'SELECT_INGREDIENTS', payload: e.target.id}),
    submitDrink: () => dispatch({tyle: 'SUBMIT_DRINK'})
})

export default mapDispatchToProps;