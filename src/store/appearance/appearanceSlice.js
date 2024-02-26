import { createSlice } from "@reduxjs/toolkit";

const AppearanceSlice = createSlice({
    name: "appearance",
    initialState: {
        backgroundColor: {
            name: 'darker',
            primary: '#000000',
            secondary: '#16181c',
            third: '#212327',
            modal: '#5b708366'
        },
        color: {
            primary: '#1d9bf0',
            secondary: '#8ecdf8',
            base: '#e7e9ea',
            baseSecondary: '#71767b'
        },
        fontSize: 16
    },
    reducers: {
        _setBackgroundColor: (state, action) => {
			state.backgroundColor = action.payload
		},
		_setColor: (state, action) => {
			state.color = action.payload
		},
		_setFontSize: (state, action) => {
			state.fontSize = action.payload
		},
        _removeall: (state) => {
            state.backgroundColor = {
                primary: '#15202b',
                secondary: '#1e2732',
                third: '#263340',
                modal: '#263340',

            },
            state.color = {
                primary: '#1d9bf0',
                secondary: '#8ecdf8',
                base: '#f7f9f9',
                baseSecondary: 'yellow'
            }
            state.fontSize = 16
        }
      
		// _setBoxShadow: (state, action) => {
		// 	state.boxShadow = action.payload
		// }
    },
});

export const appearanceActions = AppearanceSlice.actions;
export default AppearanceSlice.reducer;
