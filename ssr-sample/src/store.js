import rootReducer from './myindex'
import {createStore} from 'redux'

const store=createStore(rootReducer,getStateFromLocalStorage())
function saveToLocalStorage(state){
    try{
     localStorage.setItem('state',JSON.stringify(state))
    }
    catch(e){
        console.log("save state error"+e)
    }
}
function getStateFromLocalStorage(){
    const serializeState=localStorage.getItem('state')

    try{
        if(serializeState===null) return undefined

      return JSON.parse(serializeState)        
    }
    catch(e){
        console.log("error"+e)
        return undefined
    }
}
store.subscribe(()=>saveToLocalStorage(store.getState()))
export default store