import {
    Cocktail,
    CocktailAPI,
    CocktailByIngredient,
    CocktailByIngredientAPI,
} from '../types/cocktailsType';
import { extractIngredients } from '../utils/extractIngredients';

const BASE_URL = process.env.REACT_APP_BASE_URL || '';

const serializeCocktail = (cocktail: CocktailAPI): Cocktail => {
    const ingredients = extractIngredients(cocktail);

    return {
        id: cocktail.idDrink,
        name: cocktail.strDrink,
        isFavorite: false,
        isPopular: false,
        category: cocktail.strCategory,
        alcoholic: cocktail.strAlcoholic,
        glass: cocktail.strGlass,
        instructions: cocktail.strInstructions,
        image: cocktail.strDrinkThumb,
        ingredients,
    };
};

const serializeCocktailByIngredient = (
    cocktailByIngredient: CocktailByIngredientAPI
): CocktailByIngredient => {
    return {
        id: cocktailByIngredient.idDrink,
        name: cocktailByIngredient.strDrink,
        image: cocktailByIngredient.strDrinkThumb,
    };
};

const getData = async (path: string) => {
    try {
        const response = await fetch(`${BASE_URL}${path}`);

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        return data.drinks;
    } catch (error) {
        const typedError = error as Error;
        console.error(`{message: ${typedError?.message}}`);
    }
};

export const getCocktailById = async (id: string) => {
    try {
        const cocktails = await getData(`/lookup.php?i=${id}`);
        return cocktails.map(serializeCocktail)[0];
    } catch (error) {
        throw new Error('Error getting cocktail by id');
    }
};

export const getCocktailsByName = async (name: string) => {
    try {
        const cocktails = await getData(`/search.php?s=${name}`);
        return cocktails.map(serializeCocktail);
    } catch (error) {
        throw new Error('Error getting cocktail by name');
    }
};

export const getCocktailsByIngredient = async (ingredientName: string) => {
    try {
        const cocktails = await getData(`/filter.php?i=${ingredientName}`);
        return cocktails.map(serializeCocktailByIngredient);
    } catch (error) {
        throw new Error('Error getting cocktails by ingredient');
    }
};

export const getCocktailsByCategory = async (categoryName: string) => {
    try {
        const cocktails = await getData(`/filter.php?c=${categoryName}`);
        return cocktails.map(serializeCocktailByIngredient);
    } catch (error) {
        throw new Error('Error getting cocktails by category');
    }
};
