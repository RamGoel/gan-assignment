import { createSlice } from "@reduxjs/toolkit";
import { objectFilter } from "../utils/functions";

const initialState = {
    mode: 'lightMode',
    cart: {},
    totalCartAmount:0,
    totalCartQuantity:0
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setUiMode: (state, action) => {
            state.mode = action.payload
        },
        addToCart: (state, action) => {
            state.cart[action.payload.id] = action.payload
            state.totalCartAmount+=Number(action.payload.price)
            state.totalCartQuantity+=1;
        },
        removeFromCart: (state, action) => {
            state.totalCartAmount-=Number(state.cart[action.payload].price)
            state.totalCartQuantity-=1;
            state.cart=objectFilter(state.cart, item=>item.id!==action.payload)
        }
    }
})

export const {
    setUiMode,
    addToCart,
    removeFromCart
} = appSlice.actions

export default appSlice.reducer
