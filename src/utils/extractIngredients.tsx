import { CocktailAPI, Ingredient } from '../types/cocktailsType';

type DynamicKeys = `strIngredient${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`;

export const extractIngredients = (cocktail: CocktailAPI): Ingredient[] => {
    const ingredients = [];

    for (let i = 1; i <= 10; i++) {
        const ingredientName = cocktail[`strIngredient${i}` as DynamicKeys];
        const ingredientMeasure = cocktail[`strMeasure${i}` as DynamicKeys];

        if (ingredientName && ingredientMeasure) {
            ingredients.push({
                name: ingredientName,
                measure: ingredientMeasure,
            });
        }
    }

    return ingredients;
};
