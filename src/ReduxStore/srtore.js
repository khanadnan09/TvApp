import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './Cradslice'
export const store = configureStore({
  reducer: {
    card: CardReducer,
  },
});

store.subscribe(()=>{
  localStorage.setItem("reduxState", JSON.stringify(store.getState()))
})
