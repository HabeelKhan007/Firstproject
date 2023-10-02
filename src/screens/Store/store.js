import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import productReducer from "./reducer";
import { api } from "../Services/apiSlice";




export const store = configureStore({
    reducer: {
        product:productReducer,
        [api.reducerPath]: api.reducer,
        
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
export default store;