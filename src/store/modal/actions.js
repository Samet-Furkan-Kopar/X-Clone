import {store} from "../store"
import {modalActions} from "./modalSlice"

export const setModel = (name) => store.dispatch(modalActions._setModal(name))
export const removeModel = () => store.dispatch(modalActions._removeModal())