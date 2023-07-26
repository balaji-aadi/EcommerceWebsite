import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name : "cart",

    initialState : {
        products : [],
        quantity : 0,
        productQuantity : 0,
        total : 0
    },
    reducers : {
        addProduct : (state,action) => {
            state.quantity += 1
            state.productQuantity += action.payload.productQuantity
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.productQuantity;
        },

        removeProduct : (state,action) => {
            
            return {
                ...state,
                products : state.products.filter((x) => x._id !== action.payload),
            }
        },
    }
})


export const {addProduct,removeProduct} = cartSlice.actions
export default cartSlice.reducer