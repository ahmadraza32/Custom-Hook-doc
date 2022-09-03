export const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PRODUCTS':
            return {...state, products: action.payload}

        case 'ADD_PRODUCT':
            return {...state, cart: [ ...state.cart, {...action.payload} ] }

        case 'REMOVE_PRODUCT':
            return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id ) }

        case 'CHANGE_QTY':
            return { ...state, cart: state.cart.filter(c => c.id === action.payload.id ? c.qty = action.payload.quantity : c.qty )}

        default:
            break
    }
}