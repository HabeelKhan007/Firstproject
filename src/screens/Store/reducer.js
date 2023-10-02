import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const salarySlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCategoryName: (state, action) => {
            // console.log('stateeeee',state)
            state.categoryName = action.payload;
        },

        deleteCategoryName:(state, action)=>{
            state = state.filter((item)=> item.category = action.payload);
          
            // console.log('staterrrrr',state)
        }
    }

});

export const {
    setCategoryName
}
    = salarySlice.actions;

export default salarySlice.reducer;