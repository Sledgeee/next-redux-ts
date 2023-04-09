import { createSlice } from '@reduxjs/toolkit'
import { addExampleToSomething } from './example.actions'

import { ExampleInitialState } from './example.interface'

const initialState: ExampleInitialState = {
	example: {
		values: []
	}
}

export const exampleSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {
		addExample: (state, { payload }) => {
			state.example.values.push(payload)
		}
	},
	extraReducers: builder => {
		builder.addCase(addExampleToSomething.fulfilled, (state, { payload }) => {
			state.example.values = [...state.example.values, { ...payload }]
		})
	}
})

export const { addExample } = exampleSlice.actions
