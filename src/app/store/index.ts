import { configureStore } from "@reduxjs/toolkit";
import { beerApi } from "../../shared/api";

export const store = configureStore({
    reducer: {
        [beerApi.reducerPath]: beerApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beerApi.middleware)
});