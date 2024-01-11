import { Ingredient } from '../types/cocktailsType';

export const generateIngredientsList = (ingredients: Ingredient[]) => {
    return ingredients.map((ingredient, index) => (
        <li key={index}>{`${ingredient.name}: ${
            ingredient.measure !== null ? ingredient.measure : 'pinch'
        }`}</li>
    ));
};
