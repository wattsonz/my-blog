import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import testReducer from "./slices/testSlice"

const reducer = {
    test: testReducer
}

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === "development",
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()