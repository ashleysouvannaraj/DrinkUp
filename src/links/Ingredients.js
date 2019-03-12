import FlipCard from '../FlipCard';
import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import {withRouter} from 'react';
import '../FlipCard.css';

const cards = [
    {
        image: './links/imgs/Rum&Coke.png',
        name: 'Rum & Coke',
        ingredients: 'RUM, COKE'
    },
    {
        image: './links/imgs/Rum&Coke.png',
        name: 'Rum & Coke',
        ingredients: 'RUM, COKE'
    }
]

 const Ingredients = () => {
    return (
    <div>
        { cards.map((card  => {
            return <FlipCard image={card.image} name={card.name} ingredients={card.ingredients}/>
            }))
        }
    </div>
    )
}

export default Ingredients;

// let Ingredients = (props) => {
//     return (
//         <div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/Rum&Coke.png")} alt='image' width="150px" height="150px"/>
//                     RUM & COKE
//                 </div>
//                 <div class="flip-card-back">
//                     RUM <br />
//                     COKE
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                 <img src={require("../links/imgs/bluekamikaze.png")} alt='image' width="115px" height="150px"/>
//                     BLUE KAMIKAZE
//                 </div>
//                 <div class="flip-card-back">
//                     VODKA <br />
//                     BLUE CURACAO <br />
//                     LIME JUICE 
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                 <img src={require("../links/imgs/sunburn.png")} alt='image' width="150px" height="150px"/>
//                     SUNBURN
//                 </div>
//                 <div class="flip-card-back">
//                     TEQUILA <br />
//                     TRIPLE SEC <br />
//                     CRANBERRY JUICE <br />
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/tomcollins.png")} alt='image' width="115px" height="150px"/>
//                     TOM COLLINS
//                 </div>
//                 <div class="flip-card-back">
//                     GIN <br />
//                     SWEET & SOUR <br />
//                     SODA 
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/tequilasunrise.png")} alt='image' width="130px" height="150px"/>
//                     TEQUILA SUNRISE
//                 </div>
//                 <div class="flip-card-back">
//                     TEQUILA <br />
//                     TRIPLE SEC <br />
//                     CRANBERRY JUICE
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                 <img src={require("../links/imgs/cosmo.png")} alt='image' width="115px" height="150px"/>
//                     COSMOPOLITAN
//                 </div>
//                 <div class="flip-card-back">
//                     VODKA 
//                     CONTRAUE
//                     LIME JUICE
//                     CRANBERRY JUICE
//                     LIME WEDGE
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                 <img src={require("../links/imgs/madras.png")} alt='image' width="115px" height="150px"/>
//                     MADRAS
//                 </div>
//                 <div class="flip-card-back">
//                     VODKA 
//                     CRANBERRY JUICE
//                     ORANGE JUICE 
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/gin&tonic.png")} alt='image' width="150px" height="150px"/>
//                     GIN & TONIC
//                 </div>
//                 <div class="flip-card-back">
//                     GIN <br />
//                     TONIC
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                 <img src={require("../links/imgs/moscowmule.png")} alt='image' width="150px" height="150px"/>
//                     MOSCOW MULE
//                 </div>
//                 <div class="flip-card-back">
//                     VODKA <br />
//                     GINGER BEER
//                     CRUSHED ICE <br />
//                     LIME WEDGE
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/cherrybomb.png")} alt='image' width="130px" height="150px"/>
//                     CHERRY BOMB
//                 </div>
//                 <div class="flip-card-back">
//                     CHERRY VODKA <br />
//                     RED BULL
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                 <img src={require("../links/imgs/manhattan.png")} alt='image' width="150px" height="150px"/>
//                     MANHATTAN
//                 </div>
//                 <div class="flip-card-back">
//                     WHISKEY <br />
//                     SWEET VERMOUTH
//                     CHERRY
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                 <img src={require("../links/imgs/negroni.png")} alt='image' width="115px" height="150px"/>
//                     NEGRONI
//                 </div>
//                 <div class="flip-card-back">
//                     GIN <br />
//                     CAMPARI<br />
//                     SWEET RED VERMOUTH 
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/bloodymary.png")} alt='image' width="115px" height="150px"/>
//                     BLOODY MARY
//                 </div>
//                 <div class="flip-card-back">
//                     VODKA <br />
//                     BLOODY MARY MIX
//                     CELERY <br />
//                     SALT <br />
//                     LIME WEDGE
//                 </div>
//             </div>
//         </div>        <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/jaegerbomb.png")} alt='image' width="150px" height="150px"/>
//                     JAEGER BOMB
//                 </div>
//                 <div class="flip-card-back">
//                     JAEGER <br />
//                     RED BULL
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/martini.png")} alt='image' width="115px" height="150px"/>
//                     MARTINI
//                 </div>
//                 <div class="flip-card-back">
//                     VODKA <br />
//                     VERMOUTH
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/french75.png")} alt='image' width="70px" height="150px"/> <br />
//                     FRENCH 75 
//                 </div>
//                 <div class="flip-card-back">
//                     GIN <br />
//                     CHAMPAGNE
//                     LEMON JUICE <br />
//                     SIMPLE SYRUP
//                     LIME WEDGE
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/thecab.png")} alt='image' width="115px" height="150px"/> <br />
//                     THE CAB
//                 </div>
//                 <div class="flip-card-back">
//                     COGNAC <br />
//                     CHAMPAGNE
//                     ANGORSTORA BITTERES <br />
//                     SIMPLE SYRUP
//                     LIME JUICE <br />
//                     MINT LEAVES
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/silkpanties.png")} alt='image' width="105px" height="150px"/> <br />
//                     SILK PANTIES
//                 </div>
//                 <div class="flip-card-back">
//                     VODKA <br />
//                     PEACH SCHNAPPS
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/painkiller.png")} alt='image' width="140px" height="150px"/>
//                     PAINKILLER
//                 </div>
//                 <div class="flip-card-back">
//                     PUSSER'S RUM <br />
//                     ORANGE JUICE
//                     PINEAPPLE JUICE <br />
//                     CREAM OF COCONUT
//                     NUTMEG <br />
//                     PINEAPPLE WEDGE
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/sidecar.png")} alt='image' width="115px" height="150px"/>
//                     SIDECAR
//                 </div>
//                 <div class="flip-card-back">
//                     COGNAC <br />
//                     TRIPLE SEC <br />
//                     LEMON JUICE 
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/rummartienez.png")} alt='image' width="115px" height="150px"/>
//                     RUM MARTINEZ
//                 </div>
//                 <div class="flip-card-back">
//                     RUM <br />
//                     SWEET VERMOUTH
//                     MARASCHINO LIQUEUR <br />
//                     ANGOSTORA BITTERS
//                     ORANGE PEEL
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/minderaser.png")} alt='image' width="145px" height="150px"/>
//                     MIND ERASER
//                 </div>
//                 <div class="flip-card-back">
//                     VODKA <br />
//                     KAHLUA <br />
//                     SODA 
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/amarettosour.png")} alt='image' width="125px" height="150px"/>
//                     AMARETTO SOUR 
//                 </div>
//                 <div class="flip-card-back">
//                     AMARETTO <br />
//                     SWEET & SOUR 
//                     LEMON WEDGE
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/gimlet.png")} alt='image' width="115px" height="150px"/>
//                     GIMLET
//                 </div>
//                 <div class="flip-card-back">
//                     GIN <br />
//                     SWEETENED LIME JUICE
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/marg.png")} alt='image' width="145px" height="150px"/>
//                     MARGARITA
//                 </div>
//                 <div class="flip-card-back">
//                     TEQUILA <br />
//                     SWEET & SOUR MIX 
//                     SALT RIM <br />
//                     LIME WEDGE
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/gin&tonic.png")} alt='image' width="150px" height="150px"/>
//                     VODKA SODA
//                 </div>
//                 <div class="flip-card-back">
//                     VODKA <br />
//                     SODA
//                 </div>
//             </div>
//         </div>
//         <div class="flip-card">
//             <div class= "flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src={require("../links/imgs/oldfash.png")} alt='image' width="150px" height="150px"/>
//                     OLD FASHIONED
//                 </div>
//                 <div class="flip-card-back">
//                     WHISKEY <br />
//                     ANGORISTA BITTERS 
//                     SUGAR <br />
//                     ORANGE PEEL 
//                 </div>
//             </div>
//         </div>
//         </div>
//     )

// }
