import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "auth",
    initialState: {
        currentAccount: {
            id: 1,
            username: "aaaa",
            fullName: "SametaedFurkan",
            avatar: "/images/avatar2.png",
        },
        accounts: [
            {
                id: 1,
                username: "safurksawd0",
                fullName: "Samet Furkdvan",
                avatar: "/images/avatar2.png",
            },
            {
                id: 2,
                username: "melissa_altay0",
                fullName: "Melis Altay",
                avatar: "/images/avatar.jpg",
            },
            {
                id: 3,
                username: "safurkawds0",
                fullName: "Sametawd Furkan",
                avatar: "/images/avatar2.png",
            },
        ], 
    },
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload);
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter((account) => account.id !== action.payload);
            if (state.currentAccount && action.payload === state.currentAccount.id) {
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
