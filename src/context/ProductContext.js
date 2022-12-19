import React from "react";
import axios from 'axios';


let ProductStateContext = React.createContext()
let ProductDispatchContext = React.createContext()


function ProductReducer(state , action) {
    switch(action.type){

        case 'FETCH_ALL_PRODUCTS' : {
            return {
                ...state ,
                product : {...state.product , products : action.payload.products },
            }
        }


        case 'SET_SELECTED_PRODUCT' : {
            return {
                ...state ,
                product : {...state.product , selectedProduct : action.payload.selectedProduct},
            }
        }

        case 'FETCH_BASKET_ITEMS' : {
            return {
                ...state , 
                basket : {...state.basket , basketItems : action.payload.basketItems , basketItemsTotlaPrice : action.payload.basketItemsTotlaPrice , basketItemsTotalCount : action.payload.basketItemsTotalCount }
            }
        }

        default : {
            throw new Error (`undifind action type : ${action.type}`)
        }
    }
}


function ProductProvider({children}) {
    let [state , dispatch] = React.useReducer(ProductReducer , {
        counter : 16,
        product : {
            products : [] ,
            selectedProduct : null,

        }
    
        ,
        basket : {
            basketItems : [],
            basketItemsTotlaPrice : 0,
            basketItemsTotalCount : 0
            
        }

    });

    return(
        <ProductStateContext.Provider value={state} >
            <ProductDispatchContext.Provider value={dispatch}>
                {children}
            </ProductDispatchContext.Provider>    
        </ProductStateContext.Provider>
    )
}



function useProductState() {
    let context = React.useContext(ProductStateContext);
    if(context === undefined){
        throw new Error('use layout')
    }

    return context;
}


function useProductDispatch(){
    let context = React.useContext(ProductDispatchContext)
    if(context === undefined){
        throw new Error('use layout dis')
    }

    return context
}


export {ProductProvider ,useProductState , useProductDispatch   , fetchBasketItems ,removeBasketProduct ,setSelectedProduct ,addToCartProduct}


// fetchAllProducts




// const fetchAllProducts = async (dispatch) => {

//     let result = await axios.get('https://fakestoreapi.com/products')
//     dispatch({
//         type : 'FETCH_ALL_PRODUCTS',
//         payload : {
//             products : result.data.data,

             
//         }
//     })
    
// }


const setSelectedProduct = (dispatch,id) => {

    
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res =>{
        let selectedProduct = new Array()
        selectedProduct.push(res.data)
        dispatch({
            type : 'SET_SELECTED_PRODUCT',
            payload : {
                selectedProduct ,
            }
        })
    })
 
}


const addToCartProduct = (product) => {
    product.counts = 1
    
    if(localStorage.getItem(product.title)){
        let local = JSON.parse(localStorage.getItem(product.title))
        local.counts += 1
        local.price += product.price
        localStorage.setItem(product.title ,JSON.stringify(local))
    }
    else {
        let basketProducts = JSON.stringify(product)
        localStorage.setItem(product.title, basketProducts)
    }

}


const fetchBasketItems = (dispatch) => {
    
    let basketItems = new Array()
    for(let i=0;i < localStorage.length;++i){
        let key = localStorage.key(i)
        let local = localStorage.getItem(key)
        let jso = JSON.parse(local)
        if(jso.title){
            basketItems.push(jso)
        }
    }
    
    let totlaPrice =0;
    for(let i=0;i < basketItems.length;++i){
        totlaPrice += basketItems[i].price
    }

    let totlaCount =0;
    for(let i=0;i < basketItems.length;++i){
        totlaCount += basketItems[i].counts
    }

    
    dispatch({
        type : 'FETCH_BASKET_ITEMS',
        payload : {
            basketItems : basketItems ,
            basketItemsTotlaPrice : totlaPrice ,
            basketItemsTotalCount : totlaCount
        }
    })
}


const removeBasketProduct = (product) =>{
    localStorage.removeItem(product.title)
} 


