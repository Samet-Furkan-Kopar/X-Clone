import {store} from "../store"
import {appearanceActions} from "./appearanceSlice"

export const setBackgroundColor = (data) => store.dispatch(appearanceActions._setBackgroundColor(data))
export const setColor = (data) => store.dispatch(appearanceActions._setColor(data))
export const setFontSize = (data) => store.dispatch(appearanceActions._setFontSize(data))
export const removeall = () => store.dispatch(appearanceActions._removeall())