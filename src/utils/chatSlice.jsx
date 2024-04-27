import { createSlice, configureStore } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: "",
  reducers: {
    add :(state,action)=>{
        return action.payload;
    }

  }
})

export const { add } = chatSlice.actions;

export default chatSlice.reducer;


