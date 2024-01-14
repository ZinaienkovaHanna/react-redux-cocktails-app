import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cocktail } from '../types/cocktailsType';

interface CocktailsStateType {
    cocktails: Cocktail[];
}

const initialState: CocktailsStateType = {
    cocktails: [],
};

const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {
        addCocktail: (state, action: PayloadAction<Cocktail>) => {
            state.cocktails.push(action.payload);
        },
        deleteCocktail: (state, action: PayloadAction<string>) => {
            state.cocktails = state.cocktails.filter(
                (cocktail) => cocktail.id !== action.payload
            );
        },
    },
});

export const { addCocktail, deleteCocktail } = cocktailsSlice.actions;

export default cocktailsSlice.reducer;
