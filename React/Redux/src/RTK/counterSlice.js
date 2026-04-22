import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        name:"No value"
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        change:(state, action)=> {
            state.name = action.payload;
        }
    }
});

export const { increment, decrement, reset, change } = counterSlice.actions;
export default counterSlice.reducer;