import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import subscriptionPlans from './subscriptionPlans/reducer'
import auth from './auth/reducer'

const reducers = combineReducers({
    subscriptionPlans,
    auth
})

export const configureStore = () => {
    const middlewares = [thunk]
    const enhancedMiddlewares = applyMiddleware(...middlewares)

    const store = createStore(reducers, composeWithDevTools(enhancedMiddlewares))

    return store
}