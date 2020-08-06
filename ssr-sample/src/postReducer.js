import {isAuthenticated} from './actions'

const initialState={
lst:[1,2,3,3,4,5]
}
export default function(state=initialState,action){
// alert("good called")
    switch(action.type){
case isAuthenticated:
return {...state,lst:[2,3,34,45,5]}

default:
return {...state}

    }
}