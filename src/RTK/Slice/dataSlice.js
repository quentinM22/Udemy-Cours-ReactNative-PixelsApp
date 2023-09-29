import { createSlice } from "@reduxjs/toolkit"

import DATA from '../../data/data.json'

const initialState = {
	users: DATA,
    selectUsers: [],
    selectCategories: DATA
}

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
        
	},
})
export const {  } = dataSlice.actions

export default dataSlice.reducer
