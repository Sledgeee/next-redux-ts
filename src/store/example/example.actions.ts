import { Example } from '@/types/example.type'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

export const addExampleToSomething = createAsyncThunk<any, Example>(
	'example/add',
	async (example, thunkAPI) => {
		try {
			// do something...
			toastr.success('Status', 'Success')
			return example
		} catch (e: any) {
			thunkAPI.rejectWithValue(e)
		}
	}
)

// more actions here...
