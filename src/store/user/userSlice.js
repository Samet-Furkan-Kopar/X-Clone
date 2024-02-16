import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "auth",
    initialState: {
        currentAccount: {
            id:1,
            username: "safurks",
            fullName: "Samet Furkan",
            avatar: "/images/avatar2.png",
        },
        accounts: [],
       
    },
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload);
        },
        _removeAccount: (state,action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload);
            if(state.currentAccount && action.payload === state.currentAccount.id) {
                this.setCurrentAccount(false);
            }   
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload;
        },
    },
});

export const userActions = UserSlice.actions;
export default UserSlice.reducer;
