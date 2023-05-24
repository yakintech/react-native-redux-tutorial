
import axios from 'axios'

export async function ProductReducer(state: any, action: any) {

    if (state == undefined) {
        return [];
    }
    else if (action.type == 'ADD_TO_PRODUCT') {
        return [...state, action.payload]
    }
    else if (action.type == 'EMPTY') {
        return []
    }
    else if (action.type == 'LOAD') {
        await axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                state = res.data;
            })
        return state;
    }
    else {
        return [];
    }

}