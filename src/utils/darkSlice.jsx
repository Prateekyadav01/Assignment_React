import { createSlice, configureStore } from '@reduxjs/toolkit'

const darkSlice = createSlice({
  name: 'dark',
  initialState: "",
  reducers: {
    checkState :(state,action)=>{
        return action.payload;
    }

  }
})

export const { checkState } = darkSlice.actions;

export default darkSlice.reducer;


