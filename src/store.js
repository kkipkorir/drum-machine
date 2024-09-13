
import { createStore } from "redux";


const initialState = {
    power:false,
    bank:false,
    name:' '
}

const SETPOWER = 'SET_POWER';
const SETBANK = 'SET_BANK';
const SETNAME = 'SET_NAME';

///reducer 
const appReducer = (state=initialState,action)=>{
    switch(action.type){
        case SETPOWER:
            return{...state, power: action.payload};
        case SETBANK:
            return{...state, bank: action.payload}
        case SETNAME:
            return{...state, bank: !state.bank}
        default:
            return state;
    }
}

const store =createStore(appReducer)

export default store;