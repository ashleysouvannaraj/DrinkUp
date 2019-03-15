import { UPDATE_SCORE_TYPE } from "./Actions/actionCreators";

export const initialState = {
  currentSelectedIngredients: [],
  ingredients: {
    liquor: [
      "Gin",
      "Vodka",
      "Rum",
      "White Rum",
      "Bourbon",
      "Whiskey",
      "Tequila",
      "Silver Tequila",
      "Cognac",
      "Champagne",
      "Cherry Vodka",
      "Jaeger"
    ],
    liquer: [
      "Peach Schnapps",
      "Blue Curacao",
      "Triple Sec",
      "Vermouth",
      "Cointreau",
      "Kahlua",
      "Campari",
      "Sweet red Vermouth",
      "Amaretto",
      "Maraschino Liqueur",
      "Cream of coconut"
    ],
    mixers: [
      "Coke",
      "Soda",
      "Red Bull",
      "Grenadine",
      "Simple Syrup",
      "Lemon juice",
      "Lime Juice",
      "Orange Juice",
      "Cranberry Juice",
      "Bloody Mary Mix",
      "Ginger Beer",
      "Angostura bitters",
      "Sweetened Lime Juice",
      "Sweet and Sour Mix",
      "Beaten Egg White",
      "Half-and-Half",
      "Tonic"
    ],
    garnishes: [
      "Celery",
      "Orange Peel",
      "Marashcino Cherry",
      "Salt Rim",
      "Lemon",
      "Nutmeg",
      "Mint Leaves",
      "Crushed ice",
      "Lime"
    ]
  },
  levels: {
    Level1: {
      drinks: {
        "Gin and Tonic": ["Gin", "Tonic"],
        "Rum and Coke": ["Rum", "Coke"],
        "Vodka Soda": ["Vodka", "Soda"]
      }
    },
    Level2: {
      drinks: {
        "Jaeger Bomb": ["Jaeger", "Red Bull"],
        "Cherry Bomb": ["Cherry Vodka", "Red Bull"],
        "Silk Panties": ["Vodka", "Peach Schnapps"]
      }
    },
    Level3: {
      drinks: {
        "Tom Collins": ["Gin", "Sweet and Sour Mix", "Soda"],
        "Blue Kamikaze": ["Vodka", "Blue Curacao", "Lime Juice"],
        "Tequila Sunrise": ["Tequila", "Orange Juice", "Grenadine"]
      }
    },
    Level4: {
      drinks: {
        Sunburn: ["Tequila", "Triple Sec", "Cranberry Juice"],
        Madras: ["Vodka", "Cranberry Juice", "Orange Juice"],
        Martini: ["Vodka", "Vermouth"]
      }
    },
    Level5: {
      hasGarnishes: true,
      drinks: {
        Cosmopolitan: [
          "Vodka",
          "Cointreau",
          "Lime Juice",
          "Cranberry Juice",
          "Lime"
        ],
        "Bloody Mary": [
          "Vodka",
          "Bloody Mary Mix",
          "Celery",
          "Salt Rim",
          "Lime"
        ],
        "Mind Eraser": ["Vodka", "Kahlua", "Soda"]
      }
    },
    Level6: {
      hasGarnishes: true,
      drinks: {
        "Moscow Mule": ["Vodka", "Ginger Beer", "Crushed Ice", "Lime"],
        Manhattan: ["Bourbon", "Sweet Vermouth", "Cherry"],
        "Old Fashioned": ["Whiskey", "Angorista Bitters", "Sugar", "Orange Peel"]
      }
    },
    Level7: {
      hasGarnishes: true,
      drinks: {
        Negroni: ["Gin", "Campari", "Sweet Red Vermouth"],
        Margarita: ["Tequila", "Sweet and Sour Mix", "Salt Rim", "Lime"],
        Gimlet: ["Gin", "Sweetened Lime Juice"]
      }
    },
    Level8: {
      hasGarnishes: true,
      "French 75": ["Gin", "Champagne", "Lemon Juice", "Simple Syrup", "Lime"],
      Sidecar: ["Cognac", "Triple Sec", "Lemon Juice"],
      "Amaretto Sour": ["Amaretto", "Sweet and Sour Mix", "Lemon"]
    },
    Level9: {
      hasGarnishes: true,
      drinks: {
        "The Cab": [
          "Cognac",
          "Champagne",
          "Simple Syrup",
          "Angostora Bitters",
          "Lime Juice"
        ],
        "Rum Martinez": [
          "Rum",
          "Sweet Vermouth",
          "Maraschino Liqueur",
          "Angostora Bitters",
          "Orange Peel"
        ],
        Painkiller: [
          "Pusser's Rum",
          "Orange Juice",
          "Pineapple Juice",
          "Cream of Coconut",
          "Nutmeg",
          "Pineapple Wedge"
        ]
      }
    },
    Level10: {
      hasGarnishes: true,
      drinks: {
        "Ramos Gin Fizz": [
          "Gin",
          "Lemon Juice",
          "Lime Juice",
          "Half-and-Half",
          "Simple Syrup",
          "Beaten Egg White"
        ],
        Mojito: ["White Rum", "Soda", "Lime Juice", "Mint Leaves", "Lime"],
        "Long Island Iced Tea": [
          "Gin",
          "Vodka",
          "Rum",
          "Tequila",
          "Triple Sec",
          "Sweet and Sour Mix",
          "Coke",
          "Lemon"
        ]
      }
    }
  },
  isGameStarted: false,
  currentUser: {
    username: ""
  },
  timer: "",
  score: 0,
  currentLevel: [
    "Level1",
    "Level2",
    "Level3",
    "Level4",
    "Level5",
    "Level6",
    "Level7",
    "Level8",
    "Level9",
    "Level10"
  ]
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_SCORE_TYPE:
      return { ...state, score: state.score + payload.score };
    default:
      break;
    case "LOGGING_IN":
      return {...state, currentUser: {username: payload.loggedInUser} };
      break;
    case "LOG_OUT":
      return {...state, currentUser: {username: ""} }
      break;
    case "START_GAME":
      return {...state, isGameStarted: true }
      break;
    case "END_GAME":
      return {...state, isGameStarted: false }
      break;
  }

  return state;
};

export default reducer;
