import axios from 'axios'


export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID'
export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR'

export const getProductsRequest = ()=>{

    return{
        type: GET_PRODUCTS_REQUEST,
 
    }

}

export const getProductsSuccess = (products)=>{
    return{
        type: GET_PRODUCTS_SUCCESS,
        payload: products
    }
}
export const getProductsError = (error)=>{
    return{
        type: GET_PRODUCTS_ERROR,
        payload: error
    }
    
}

export const getProducts = (query)=>{
    return (dispatch)=>{
        dispatch(getProductsRequest())
        axios.get(`http://localhost:3001/api/search?q=${query}`)
        .then(response=>dispatch(getProductsSuccess(response.data)))
        .catch(err=>dispatch(getProductsError('No se han encontrado resultados del producto solicitado!')))
    }
}

export const getProductById = (id)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/api/items/${id}`)
        .then(response=>dispatch(
            {
                type: GET_PRODUCT_BY_ID,
                payload: response.data
            }
        ))
    }
}