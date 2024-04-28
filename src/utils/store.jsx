
import { configureStore } from '@reduxjs/toolkit'
import chatSlice from './chatSlice'
import darkSlice from './darkSlice';

const store = configureStore({
    reducer: {
        chat : chatSlice,
        dark : darkSlice
    }
  })

  export default store;