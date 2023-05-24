import axios from "axios"

export const productActions = {
    load: () => {

        return async (dispatch: any) => {
            axios.get('https://northwind.vercel.app/api/products')
                .then(res => {
                    dispatch({ type: 'LOAD', payload: res.data })
                })
        }


    }
}