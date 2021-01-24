import { GET_PRODUCTS_ERROR, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_BY_ID } from '../actions/actions'

const initialState = {
    error:'',
    loading:false,
    products: [],
    product: {}
}

const productsReducers = (state=initialState,action)=>{

    switch(action.type){

        case GET_PRODUCTS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_PRODUCTS_SUCCESS:
            return{
                error: '',
                loading: false,
                products: action.payload,
                product: {}
            }
        case GET_PRODUCTS_ERROR:
            return{
                error: action.payload,
                loading: false,
                products: [],
                product: {}
            }
        case GET_PRODUCT_BY_ID:
            
                return{
                    error: '',
                    loading: false,
                    products: [],
                    product: action.payload
                }
            
        default:
            return{
                state
            }
    }
}

export default productsReducers