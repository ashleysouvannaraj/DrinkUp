import FlipCard from '../FlipCard';
import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import {withRouter} from 'react';
import '../FlipCard.css';

const cards = [
    {
        image: './images/Rum&Coke.png',
        name: 'RUM & COKE',
        ingredients: 'RUM, COKE'
    },
    {
        image: './images/bluekamikaze.png',
        name: 'BLUE KAMIKAZE',
        ingredients: 'VODKA, BLUE CARACAO, LIME JUICE'
    },
    {
        image: './images/sunburn.png',
        name: 'SUNBURN',
        ingredients: 'TEQUILA, TRIPLE SEC, CRANBERRY JUICE'
    },
    {
        image: './images/tomcollins.png',
        name: 'TOM COLLINS',
        ingredients: 'GIN, SWEET & SOUR, SODA'
    },
    {
        image: './images/tequilasunrise.png',
        name: 'TEQUILA SUNRISE',
        ingredients: 'TEQUILA, TRIPLE SEC, CRANBERRY JUICE'
    },
    {
        image: './images/cosmo.png',
        name: 'COSMOPOLITAN',
        ingredients: 'VODKA, CONTRAUE, LIME JUICE, CRANBERRY JUICE, LIME WEDGE'
    },
    {
        image: './images/madras.png',
        name: 'MADRAS',
        ingredients: 'VODKA, CRANBERRY JUICE, ORANGE JUICE'
    },
    {
        image: './images/gin&tonic.png',
        name: 'GIN & TONIC',
        ingredients: 'GIN, TONIC'
    },
    {
        image: './images/moscowmule.png',
        name: 'MOSCOW MULE',
        ingredients: 'VODKA, GINGER BEER, CRUSHED ICE, LIME WEDGE'
    },
    {
        image: './images/cherrybomb.png',
        name: 'CHERRY BOMB',
        ingredients: 'CHERRY VODKA, RED BULL'
    },
    {
        image: './images/manhattan.png',
        name: 'MANHATTAN',
        ingredients: 'WHISKEY, SWEET VERMOUTH, CHERRY'
    },
    {
        image: './images/negroni.png',
        name: 'NEGRONI',
        ingredients: 'GIN, CAMPARI, SWEET RED VERMOUTH'
    },
    {
        image: './images/bloodymary.png',
        name: 'BLOODY MARY',
        ingredients: 'VODKA, BLOODY MARY MIX, CELERY, SALT, LIME WEDGE'
    },
    {
        image: './images/jaegerbomb.png',
        name: 'JAEGER BOMB',
        ingredients: 'JAEGER, RED BULL'
    },
    {
        image: './images/martini.png',
        name: 'MARTINI',
        ingredients: 'VODKA, VERMOUTH'
    },
    {
        image: './images/french75.png',
        name: 'FRENCH 75',
        ingredients: 'GIN, CHAMPAGNE, LEMON JUICE, SIMPLE SYRUP, LIME WEDGE'
    },
    {
        image: './images/thecab.png',
        name: 'THE CAB',
        ingredients: 'COGNAC, CHAMPAGNE, ANGORSTORA BITTERS, SIMPLE SYRUP, LIME JUICE, MINT LEAVES'
    },
    {
        image: './images/silkpanties.png',
        name: 'SILK PANTIES',
        ingredients: 'VODKA, PEACH SCHNAPPS'
    },
    {
        image: './images/sidecar.png',
        name: 'SIDECAR',
        ingredients: 'COGNAC, TRIPLE SEC, LEMON JUICE'
    },
    {
        image: './images/rummartienez.png',
        name: 'RUM MARTINEZ',
        ingredients: 'RUM, SWEET VERMOUTH, MARASCHINO LIQUEUR, ANGOSTORA BITTERS, ORANGE PEEL'
    },
    {
        image: './images/minderaser.png',
        name: 'MIND ERASER',
        ingredients: 'VODKA, KAHLUA, SODA'
    },
    {
        image: './images/amarettosour.png',
        name: 'AMARETTO SOUR',
        ingredients: 'AMARETTO, SWEET & SOUR, LEMON WEDGE'
    },
    {
        image: './images/gimlet.png',
        name: 'GIMLET',
        ingredients: 'GIN, SWEETENED LIME JUICE'
    },
    {
        image: './images/marg.png',
        name: 'MARGARITA',
        ingredients: 'TEQUILA, SWEET & SOUR MIX, SALT RIM, LIME WEDGE'
    },
    {
        image: './images/gin&tonic.png',
        name: 'VODKA SODA',
        ingredients: 'VODKA, SODA'
    },
    {
        image: './images/oldfash.png',
        name: 'OLD FASHIONED',
        ingredients: 'WHISKEY, ANGORISTA BITTERS, SUGAR, ORANGE PEEL'
    },
    {
        image: './images/painkiller.png',
        name: 'PAINKILLER',
        ingredients: 'PUSSERS RUM, ORANGE JUICE, PINEAPPLE JUICE, CREAM OF COCONUT, NUTMEG, PINEAPPLE WEDGE'
    },
]

 const Ingredients = () => {
    return (
    <div>
        { cards.map(((card, i)  => {
            return <FlipCard key={i} image={card.image} name={card.name} ingredients={card.ingredients}/>
            }))
        }
    </div>
    )
}

export default Ingredients;