//Aksiyonların Ne Yapacağı ?

import * as actionTypes from "./actionTypes"   //actionTypes.js

//+1
export const increaseCounter = () => ({  
    type: actionTypes.INCREASE_COUNTER,
    payload: 1
})

//-1
export const decreaseCounter = () => ({  
    type: actionTypes.DECREASE_COUNTER,
    payload: 1
})

//+2
export const increaseByTwocounter = () => ({  
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payload: 2
})

