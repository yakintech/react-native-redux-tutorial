export const toDoActions = {
    add: (payload: any) => {
        return {
            type:'ADD_TODO',
            payload:payload
        }
    },
    empty: () => {
        return {
            type:'EMPTY'
        }
    }
}