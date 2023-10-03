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
		},
		addSelectCategories: (state, action) => {
			const usedSettings = action.payload
			const selectedUserByCategory = state.users.filter((user)=>{
				if (usedSettings.animals && user.category === "animals") {
					return true
				}
				if (usedSettings.travel && user.category === "travel") {
					return true
				}
				if (usedSettings.cars && user.category === "cars") {
					return true
				}
			})
			return {...state, selectCategories: selectedUserByCategory}
		}
	},
})
export const { addSelectUser, addSelectCategories } = dataSlice.actions

export default dataSlice.reducer
