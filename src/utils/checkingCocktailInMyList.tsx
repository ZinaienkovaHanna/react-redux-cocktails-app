import { Cocktail } from '../types/cocktailsType';

export const checkingCocktailInMyList = (
    cocktails: Cocktail[],
    id: string
): boolean => {
    return cocktails.some((cocktail) => cocktail.id === id);
};
