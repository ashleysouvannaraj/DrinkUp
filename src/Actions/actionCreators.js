const mapDispatchToProps = (dispatch) => ({
    startGame: () => dispatch({type:'START_GAME'}),
    selectLiquor: () => dispatch({type: 'SELECT_LIQUOR'}),
    selectLiquer: () => dispatch({type: 'SELECT_LIQUER'}),
    selectMixers: () => dispatch({type: 'SELECT_MIXERS'}),
    selectGarnishes: () => dispatch({type: 'SELECT_GARNISHES'}),
    submitDrink: () => dispatch({tyle: 'SUBMIT_DRINK'})
})

export default mapDispatchToProps;