import {store} from "../store"
import {userActions} from "./userSlice"

export const setCurrentAccount = (data) => store.dispatch(userActions._setCurrentAccount(data))