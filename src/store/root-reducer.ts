import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'

import { exampleSlice } from './example/example.slice'
// here import slices...

export const rootReducer = combineReducers({
	example: exampleSlice.reducer,
	// example2: exampleSlice2.reducer,
	// ...
	toastr: toastrReducer
})
