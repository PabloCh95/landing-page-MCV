import { configureStore } from "@reduxjs/toolkit";
import ShowMenuSlice from './showMenuSlice'


export default configureStore({
    reducer: {
        menu: ShowMenuSlice,
    },
});

