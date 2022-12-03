import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
    value: number
}

const initialState: InitialState = {
    value: 0
}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            if (state.value > 0) state.value -= 1
            if (state.value < 0) state.value = 0
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            if (state.value > 0) state.value -= action.payload
            if (state.value < 0) state.value = 0
        }
    }
})

export const testActions = testSlice.actions

export default testSlice.reducer