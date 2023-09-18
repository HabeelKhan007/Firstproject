import { ADD_ITEM, REMOVE_ITEM } from "../ActionTypes"

export const addItemToCart=(data)=>({
    type:ADD_ITEM,
    payload:data,
} );

export const removeItemFromCart=(item)=>({
    type:REMOVE_ITEM,
    payload:item,
} );