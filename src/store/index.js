// Dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import plans from './plans/reducer'
import auth from './auth/reducer'
import profile from './profile/reducer'
import error from './error/reducer'
import videos from './videos/reducer'
import subscription from './subscription/reducer'
import evaluations from './evaluations/reducer'
import videoEvaluations from './videoEvaluations/reducer'
import workouts from './workouts/reducer'

const reducers = combineReducers({
    auth,
    profile,
    subscription,
    videos,
    plans,
    error,
    evaluations,
    videoEvaluations,
    workouts
})

const persistConfig = {
    key: 'root',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
    const middlewares = [thunk]
    const enhancedMiddlewares = applyMiddleware(...middlewares)

    let store = createStore(persistedReducer, {}, composeWithDevTools(enhancedMiddlewares))
    let persistor = persistStore(store)

    return { store, persistor }
}