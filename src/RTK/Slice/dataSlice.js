import { createSlice } from "@reduxjs/toolkit"

import DATA from '../../data/data.json'

const initialState = {
	users: DATA,
    selectUsers: [],
    selectCategories: DATA,
}

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
       addSelectUser: (state, action) => {
		const userIndex = state.selectUsers.findIndex(user => user.id === action.payload)
		if (userIndex >= 0) {
			const newSelectUsers = [...state.selectUsers]
			newSelectUsers.splice(userIndex, 1)
			return {...state, selectUsers: newSelectUsers}
		}else{
			const user = state.users.find(user => user.id === action.payload)
			return {...state, selectUsers: state.selectUsers.concat(user)}
	   } 
	}
	},
})
export const { addSelectUser } = dataSlice.actions

export default dataSlice.reducer
