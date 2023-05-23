export function ToDoReducer(state: any, action: any) {

    if (typeof state === 'undefined') {
        return [];
    }

    if (action.type == 'ADD_TODO') {
        return [...state, action.payload]
    }
    else if (action.type == 'EMPTY') {
        return [];
    }
    else {
        return state;
    }


}


// {
//     id:1,
//     title:"login page design"
// }