// Dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import subscriptionPlans from './subscriptionPlans/reducer'
import auth from './auth/reducer'
import profile from './profile/reducer'
import error from './error/reducer'
import videos from './videos/reducer'

const reducers = combineReducers({
    subscriptionPlans,
    auth,
    profile,
    error,
    videos
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