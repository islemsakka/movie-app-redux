import { createStore, combineReducers,applyMiddleware,compose } from 'redux'
import SetStarReducers from './Reducers/SetStarReducers.js'
import SetConteur from './Reducers/SetConteurReducers.js'
import SetNameReducers from'./Reducers/SetNameReducers'
import SetRateReducer from './Reducers/SetRateReducers'
import SetTabReducer from './Reducers/SetTabReducer.js'
import SetSearchReducer from './Reducers/SetSearchReducer.js'
import thunkMiddleware from 'redux-thunk'
import VisibilityReducer from './Reducers/VisibilityReducer.js'
import SetLinkReducers from './Reducers/SetLinkReducers.js'
import SetDescription from './Reducers/SetDescriptionReducer.js'



const middleware = [thunkMiddleware];
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;
    const enhancer = composeEnhancers(
        applyMiddleware(...middleware),
        // other store enhancers if any
    );


const Store=createStore(combineReducers({
    Star: SetStarReducers, 
   Conteur:SetConteur,
   Name: SetNameReducers,
   Rate:SetRateReducer,
   Link:SetLinkReducers,
   tab:SetTabReducer,
   Visibility:VisibilityReducer,
   SearchName:SetSearchReducer,
   SetDesc:SetDescription,
  
}),enhancer)


export default Store