import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieSlice";
import { useDispatch, useSelector, TypedUseSelectorHook} from "react-redux"

export const store = configureStore({
    reducer: {
        movies: movieSlice.reducer
    }
})

type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector;