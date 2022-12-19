
// const initialState = {
     
    // product : {
    //     products : [] ,
    //     selectedProduct : null
    // }

    // ,
    // basket : {
    //     basketItems : [],
    //     basketItemsTotlaPrice : 0,
    //     basketItemsTotalCount : 0
        
    // }


// }


export default function reducers (state = initialState, action) {
    switch(action.type){
        
        case 'FETCH_ALL_PRODUCTS' : 
        return {
            ...state ,
            product : {...state.product , products : action.payload.products},
        }


        case 'SET_SELECTED_PRODUCT' : 
        return {
            ...state ,
            product : {...state.product , selectedProduct : action.payload.selectedProduct},
        }

        case 'FETCH_BASKET_ITEMS' : {
            return {
                ...state , 
                basket : {...state.basket , basketItems : action.payload.basketItems , basketItemsTotlaPrice : action.payload.basketItemsTotlaPrice , basketItemsTotalCount : action.payload.basketItemsTotalCount }
            }
        }



        default : 
        return state;


        
    
    }



// }


// // export default reducer;