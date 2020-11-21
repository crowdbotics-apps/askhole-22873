import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard11177212Reducer from '../features/Dashboard11177212/redux/reducers'
import Dashboard12177211Reducer from '../features/Dashboard12177211/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard11177212: Dashboard11177212Reducer,
Dashboard12177211: Dashboard12177211Reducer,

});