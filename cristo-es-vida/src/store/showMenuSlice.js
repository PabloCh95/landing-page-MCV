import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';

const showMenuSlice = createSlice({
    name:'showMenu',
    initialState:false,
    reducers:{
        clickOnMenu: (_state,action) => {
            return _state=action.payload;
        }
    },});

export const {clickOnMenu} = showMenuSlice.actions;
export default showMenuSlice.reducer;