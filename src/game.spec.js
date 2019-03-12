import { initialState } from "./reducer";

const { mixers, liquor, liquer, garnishes } = initialState.ingredients;

/**
 * Liquors
 */
const gin = liquor[0];
const vodka = liquor[1];
const rum = liquor[2];
const whiteRum = liquor[3];
const bourbon = liquor[4];
const whiskey = liquor[5];
const tequila = liquor[6];
const silverTequila = liquor[7];
const cognac = liquor[8];
const champagne = liquor[9];
const cherryVodka = liquor[10];
const jaeger = liquor[11];

/**
 * Liquers
 */
const peachSchnapps = liquer[0];
const blueCuracao = liquer[1];
const tripeSec = liquer[2];
const vermouth = liquer[3];
const cointreau = liquer[4];
const kahlua = liquer[5];
const campari = liquer[6];
const sweetRedVermouth = liquer[7];
const amaretto = liquer[8];
const maraschinoLiqueur = liquer[9];
const creamOfCoconut = liquer[10];

/**
 * Mixers
 */
const coke = mixers[0];
const soda = mixers[1];
const redBull = mixers[2];
const grenadine = mixers[3];
const simpleSyrup = mixers[4];
const lemonJuice = mixers[5];
const limeJuice = mixers[6];
const orangeJuice = mixers[7];
const cranberryJuice = mixers[8];
const bloodyMaryMix = mixers[9];
const gingerBeer = mixers[10];
const angosturaBitters = mixers[11];
const sweetenedLimeJuice = mixers[12];
const sweetAndSourMix = mixers[13];
const beatEggWhite = mixers[14];
const halfAndHalf = mixers[15];
const tonic = mixers[16];

/**
 * Garnishes
 */
const celery = garnishes[0];
const orangePeel = garnishes[1];
const marashcinoCherry = garnishes[2];
const saltRim = garnishes[3];
const lemon = garnishes[4];
const nutmeg = garnishes[5];
const mintLeaves = garnishes[6];
const crushedIce = garnishes[7];
const lime = garnishes[8];

describe("game", () => {
  describe("level 1", () => {
    const { drinks } = initialState.levels.Level1;

    it("answers Gin & Tonic correctly", () => {
      const drink = drinks[Object.keys(drinks)[0]];
      const ingredients = [gin, tonic];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Rum & Coke correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [coke, rum];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Vodka Soda correctly", () => {
      const drink = drinks[Object.keys(drinks)[2]];
      const ingredients = [vodka, soda];

      expect(drink.sort()).toEqual(ingredients.sort());
    });
  });

  describe("level 2", () => {
    const { drinks } = initialState.levels.Level2;

    it("answers Jaeger Bomb correctly", () => {
      const drink = drinks[Object.keys(drinks)[0]];
      const ingredients = [jaeger, redBull];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Cherry Bomb correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [cherryVodka, redBull];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Silk Panties correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [vodka, peachSchnapps];

      expect(drink.sort()).toEqual(ingredients.sort());
    });
  });

  describe("level 3", () => {
    const { drinks } = initialState.levels.Level3;

    it("answers Tom Collins correctly", () => {
      const drink = drinks[Object.keys(drinks)[0]];
      const ingredients = [gin, sweetAndSourMix, soda];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Blue Kamikaze correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [vodka, blueCuracao, limeJuice];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Tequila Sunrise correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [tequila, orangeJuice, grenadine];

      expect(drink.sort()).toEqual(ingredients.sort());
    });
  });

  describe("level 4", () => {
    const { drinks } = initialState.levels.Level4;

    it("answers Sunburn correctly", () => {
      const drink = drinks[Object.keys(drinks)[0]];
      const ingredients = [gin, sweetAndSourMix, tripeSec, soda];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Madras correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [vodka, cranberryJuice, orangeJuice];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Martini correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [vodka, vermouth];

      expect(drink.sort()).toEqual(ingredients.sort());
    });
  });

  describe("level 5", () => {
    const { drinks } = initialState.levels.Level5;

    it("answers Cosmopolitan correctly", () => {
      const drink = drinks[Object.keys(drinks)[0]];
      const ingredients = [vodka, cointreau, limeJuice, cranberryJuice, lime];
      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Bloody Mary correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [vodka, bloodyMaryMix, celery, saltRim, lime];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Mind Eraser correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [vodka, kahlua, soda];

      expect(drink.sort()).toEqual(ingredients.sort());
    });
  });

  describe("level 6", () => {
    const { drinks } = initialState.levels.Level6;

    it("answers Moscow Mule correctly", () => {
      const drink = drinks[Object.keys(drinks)[0]];
      const ingredients = [vodka, gingerBeer, crushedIce, lime];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Manhattan correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [bourbon, sweetVermouth, maraschinoCherry];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Old Fashioned correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [whiskey, angoristaBitters, sugar, orangePeel];

      expect(drink.sort()).toEqual(ingredients.sort());
    });
  });

  describe("level 7", () => {
    const { drinks } = initialState.levels.Level7;

    it("answers Negroni correctly", () => {
      const drink = drinks[Object.keys(drinks)[0]];
      const ingredients = [gin, campari, sweetRedVermouth];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Margarita correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [tequila, sweetAndSourMix, saltRim, lime];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Gimlet correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [gin, sweetenedLimeJuice];

      expect(drink.sort()).toEqual(ingredients.sort());
    });
  });

  describe("level 8", () => {
    const { drinks } = initialState.levels.Level8;

    it("answers French 75 correctly", () => {
      const drink = drinks[Object.keys(drinks)[0]];
      const ingredients = [gin, champagne, lemonJuice, simpleSyrup, lime];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Sidecar correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [cognac, tripleSec, lemonJuice];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Amaretto Sour correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [amaretto, sweetAndSourMix, lemon];

      expect(drink.sort()).toEqual(ingredients.sort());
    });
  });

  describe("level 9", () => {
    const { drinks } = initialState.levels.Level9;

    it("answers The Cab correctly", () => {
      const drink = drinks[Object.keys(drinks)[0]];
      const ingredients = [cognac, champagne, simpleSyrup, angosturaBitters, limeJuice];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Rum Martinez correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [rum, sweetVermouth, maraschinoLiqueur, angosturaBitters, orangePeel];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Painkiller correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [pussersRum, orangeJuice, pineappleJuice, creamOfCoconut, nutmeg, pineappleWedge];

      expect(drink.sort()).toEqual(ingredients.sort());
    });
  });

  describe("level 10", () => {
    const { drinks } = initialState.levels.Level10;

    it("answers Ramos Gin Fizz correctly", () => {
      const drink = drinks[Object.keys(drinks)[0]];
      const ingredients = [gin, lemonJuice, limeJuice, halfAndHalf, simpleSyrup, beatEggWhite];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Mojito correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [whiteRum, soda, limeJuice, tripeSec, mintLeaves, lime];

      expect(drink.sort()).toEqual(ingredients.sort());
    });

    it("answers Long Island Iced Tea correctly", () => {
      const drink = drinks[Object.keys(drinks)[1]];
      const ingredients = [gin, vodka, rum, tequila, tripleSec, sweetAndSourMix, coke, lemon];

      expect(drink.sort()).toEqual(ingredients.sort());
    });
  });
});
