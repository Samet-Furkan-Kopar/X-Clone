import { createSlice } from "@reduxjs/toolkit";

const AppearanceSlice = createSlice({
    name: "appearance",
    initialState: {
        backgroundColor: {
            name: "darker",
            primary: "#000000",
            secondary: "#16181c",
            third: "#212327",
            modal: "#5b708366",
        },
        color: {
            primary: "#1d9bf0",
            secondary: "#8ecdf8",
            base: "#e7e9ea",
            baseSecondary: "#71767b",
        },
        boxShadow:
            "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
        fontSize: 16,
        /*
	AZ KOYU
	backgroundColor: {
        name: "dark",
		primary: '#15202b',
		secondary: '#1e2732',
		third: '#263340',
		modal: '#5b708366'
	},
	color: {
		primary: '#1d9bf0',
		secondary: '#8ecdf8',
		base: '#f7f9f9',
		baseSecondary: '#8b98a5'
	},
	boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
	fontSize: 16
	 */

        // backgroundColor: {
        // 	name: "light",
        // 	primary: '#fff',
        // 	secondary: '#f7f9f9',
        // 	third: '#eff3f4',
        // 	modal: '#00000066'
        // },
        // color: {
        // 	primary: '#1d9bf0',
        // 	secondary: '#8ecdf8',
        // 	base: '#0f1419',
        // 	baseSecondary: '#536471'
        // },
        // boxShadow: 'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px',
        // fontSize: 16
    },
    reducers: {
        _setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload;
        },
        _setColor: (state, action) => {
            state.color = action.payload;
        },
        _setFontSize: (state, action) => {
            state.fontSize = action.payload;
        },
        _removeall: (state) => {
            state.backgroundColor = {
                name: "dark",
                primary: '#15202b',
                secondary: '#1e2732',
                third: '#263340',
                modal: '#5b708366'
            },
                state.color = {
                    primary: '#1d9bf0',
                    secondary: '#8ecdf8',
                    base: '#f7f9f9',
                    baseSecondary: '#8b98a5'
                };
            state.fontSize = 16;
            state.boxShadow =
                "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px";
        },

        // _setBoxShadow: (state, action) => {
        // 	state.boxShadow = action.payload
        // }
    },
});

export const appearanceActions = AppearanceSlice.actions;
export default AppearanceSlice.reducer;
