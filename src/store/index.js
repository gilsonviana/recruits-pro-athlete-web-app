import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';
import subscriptionPlans from './subscriptionPlans/reducer'
import auth from './auth/reducer'
import error from './error/reducer'

const reducers = combineReducers({
    subscriptionPlans,
    auth,
    error
})

const persistConfig = {
    key: 'root',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
    const middlewares = [thunk]
    const enhancedMiddlewares = applyMiddleware(...middlewares)
    // const store = createStore(reducers, composeWithDevTools(enhancedMiddlewares))

    let store = createStore(persistedReducer, {}, composeWithDevTools(enhancedMiddlewares))
    let persistor = persistStore(store)

    return { store, persistor }
}