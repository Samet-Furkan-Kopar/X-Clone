import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name: "modal",
    initialState: {
        modal:false
    },
    reducers: {
        _setModal: (state, action) => {
            state.modal = action.payload;
        },
        _removeModal: (state) => {
            state.modal=false
        }
    },
});

export const modalActions = ModalSlice.actions;
export default ModalSlice.reducer;
