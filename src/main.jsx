import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { RouterProvider } from "react-router-dom";
import { Routes as routes } from "./routes";
import "./assets/css/tailwind.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
// import Modals from "./modals/Index";
export const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        {/* <Modals /> */}
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={routes} />
        </PersistGate>
    </Provider>
);
