const initialState = {
    currentSelectedIngredients: [],
    ingredients: {
        liquor: ["Gin", "Vodka", "Rum", "White Rum", "Bourbon", "Whiskey", "Tequila", "Silver Tequila", "Cognac", "Champagne", "Cherry Vodka", "Cognac", "Jaeger"],
        liquer: ["Peach Schnapps", "Blue Curacao", "Triple Sec", "Vermouth", "Cointreau", "Kahlua", "Campari", "Sweet red Vermouth", "Amaretto", "Maraschino Liqueur","Cream of coconut"],
        mixers: ["Coke", "Soda", "Red Bull", "Grenadine", "Simple Syrup", "Lemon juice", "Lime Juice", "Orange Juice", "Cranberry Juice", "Bloody Mary Mix", "Ginger Beer", "Angostura bitters", "Sweetened Lime Juice", "Sweet and Sour Mix", "Beaten Egg White", "Half-and-Half", "Tonic"],
        garnishes: ["Celery", "Orange Peel", "Marashcino Cherry", "Salt Rim", "Lemon Peel", "Nutmeg","Mint", "Crushed ice", "Lime"]
    },
    drinks: {
        Level1: {
            "Gin and Tonic": ["Gin", "Tonic"],
            "Rum and Coke": ["Rum", "Coke"],
            "Vodka Soda": ["Vodka", "Soda"]
        },
        Level2: {
            "Jaeger Bomb": ["Jaeger", "Red Bull"],
            "Cherry Bomb": ["Cherry Vodka", "Red Bull"],
            "Silk Panties": ["Vodka", "Peach Schnapps"]
        },
        Level3: {
            "Tom Collins": ["Gin", "Sweet and Sour Mix", "Soda"],
            "Blue Kamikaze": ["Vodka", "Blue Curacao", "Lime Juice"],
            "Tequila Sunrise": ["Tequila", "Orange Juice", "Grenadine"]
        },
        Level4: {
            "Sunburn": ["Tequila", "Triple Sec", "Cranberry Juice"],
            "Madras": ["Vodka", "Cranberry Juice", "Orange Juice"],
            "Martini": ["Vodka", "Vermouth"]
        },
        Level5: {
            "Cosmopolitan": ["Vodka", "Cointreau", "Lime Juice", "Cranberry Juice", "Lime"],
            "Bloody Mary": ["Vodka", "Bloody Mary Mix", "Celery", "Salt", "Lime"],
            "Mind Eraser": ["Vodka", "Kahlua", "Soda"]

        },
        Level6: {
            "Moscow Mule": ["Vodka", "Ginger Beer", "Crushed Ice", "Lime"],
            "Manhattan": ["Whisky", "Sweet Vermouth", "Cherry"],
            "Old Fashioned": ["Whisky", "Angorista Bitters", "Sugar", "Orange Peel"],
        },
        Level7: {
            "Negroni": ["Gin", "Campari", "Sweet Red Vermouth"],
            "Margarita": ["Tequila", "Sweet and Sour Mix", "Salt Rim", "Lime"],
            "Gimlet": ["Gin", "Sweetened Lime Juice"]
        }, 
        Level8: {
            "French 75": ["Gin", "Champagne", "Lemon Juice", "Simple Syrup", "Lime"],
            "Sidecar": ["Cognac", "Triple Sec", "Lemon Juice"],
            "Amaretto Sour": ["Amaretto", "Sweet and Sour Mix", "Lemon"]
        }, 
        Level9: {
            "The Cab": ["Cognac", "Champagne", "Simple Syrup", "Angostora Bitters", "Lime Juice"],
            "Rum Martinez": ["Rum", "Sweet Vermouth", "Maraschino Liqueur", "Angostora Bitters", "Orange Peel"],
            "Painkiller": ["Pusser's Rum", "Orange Juice", "Pineapple Juice", "Cream of Coconut", "Nutmeg", "Pineapple Wedge"]
        },
        Level10: {
            "Ramos Gin Fizz": ["Gin", "Lemon Juice", "Lime Juice", "Half-and-Half", "Simple Syrup", "Egg White"],
            "Mojito": ["White Rum", "Soda", "Lime Juice", "Mint Leaves", "Lime"],
            "Long Island Iced Tea": ["Gin", "Vodka", "Rum", "Tequila", "Triple Sec", "Sweet and Sour Mix", "Coke", "Lemon"]
        }
    },
    isGameStarted: false,
    timer: '',
    score: '',
    currentLevel: ["Level1","Level2","Level3", "Level4", "Level5", "Level6", "Level7", "Level8", "Level9", "Level10"]

}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    // if (type == "SELECT_INGREDIENTS") {
    //     let value = Array.from(payload);
    //     let newValue = value.join('');
    //     return { 
    //         ...state,
    //         currentSelectedIngredients: 
    //     }
    // }
    return state;
}

export default reducer;