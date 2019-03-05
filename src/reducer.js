const initialState = {
    ingredientsSelected: [],
    currentDrinkToMake: [],
    ingredients: {
        liquor: ["Gin", "Vodka", "Rum", "White Rum", "Bourbon", "Whiskey", "Tequila", "Silver Tequila", "Cognac", "Champagne", "Cherry Vodka", "Cognac"],
        liquer: ["Peach Schnapps", "Blue Curacao", "Triple Sec", "Vermouth", "Cointreau", "Kahlua", "Campari", "Sweet red Vermouth", "Amaretto", "Maraschino Liqueur","Cream of coconut"],
        mixers: ["Coke", "Soda", "Red Bull", "Genadine", "Simple Syrup", "Lemon juice", "Lime Juice", "Orange Juice", "Cranberry Juice", "Bloody Mary Mix", "Ginger Beer", "Angostura bitters", "Sweetened Lime Juice", "Sweet and Sour mix", "Beaten Egg White", "Half-and-Half"],
        garnishes: ["Celery", "Orange Peel", "Marashcino Cherry", "Salt Rim", "Lemon Peel", "Nutmeg","Mint", "Crushed ice"]
    },
    isGameStarted: false,
    timer: ''

}

const reducer = (state = initialState, action) => {
    const { type } = action;
    return state;
}

export default reducer;