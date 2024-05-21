import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    deleteSuccess: false,
    error: null
}

const slice = createSlice({
    name: 'deleteTreasury',
    initialState: initialState,
    reducers: {
        deleteTreasuryAction: (state) =>{
            state.loading=true;
            state.deleteSuccess= false;
            state.error=null;
        },
        deleteTreasurySuccess: (state) =>{
            state.loading=false;
            state.deleteSuccess =true;
            state.error = null;
        },
        deleteTreasuryError: (state,action)=>{
            state.loading=false;
            state.deleteSuccess = false;
            state.error = action.payload;
        },
        resetDeleteTreasury: () => initialState
    }
})

export const {deleteTreasuryAction, deleteTreasuryError, deleteTreasurySuccess, resetDeleteTreasury} = slice.actions;

export default slice.reducer;