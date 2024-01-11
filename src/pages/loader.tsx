import { Params } from 'react-router-dom';
import {
    getCocktailById,
    getCocktailsByName,
    getCocktailsByIngredient,
    getCocktailsByCategory,
} from '../services/cocktailsAPI';

export const cocktailLoader = async ({
    params,
}: {
    params: Params<'cocktailId'>;
}) => {
    try {
        const cocktailId = params.cocktailId;

        if (!cocktailId) {
            throw new Error('Cocktail ID is undefined');
        }

        const cocktail = await getCocktailById(cocktailId);

        return { cocktail };
    } catch (error) {
        const typedError = error as Error;
        console.error(`{message: ${typedError?.message}}`);
    }
};

export const cocktailsByNameLoader = async ({
    params,
}: {
    params: Params<'searchByNameValue'>;
}) => {
    try {
        const searchByNameValue = params.searchByNameValue;

        if (!searchByNameValue) {
            throw new Error('Cocktail value is undefined');
        }

        const cocktailSearchByName = await getCocktailsByName(
            searchByNameValue
        );

        return { cocktailSearchByName, searchByNameValue };
    } catch (error) {
        const typedError = error as Error;
        console.error(`{message: ${typedError?.message}}`);
    }
};

export const cocktailsByIngredientLoader = async ({
    params,
}: {
    params: Params<'searchByIngredientValue'>;
}) => {
    try {
        const searchByIngredientValue = params.searchByIngredientValue;

        if (!searchByIngredientValue) {
            throw new Error('Ingredient value is undefined');
        }

        const cocktailsByIngredient = await getCocktailsByIngredient(
            searchByIngredientValue
        );

        return { cocktailsByIngredient, searchByIngredientValue };
    } catch (error) {
        const typedError = error as Error;
        console.error(`{message: ${typedError?.message}}`);
    }
};

export const cocktailsByCategoryLoader = async ({
    params,
}: {
    params: Params<'categoryValue'>;
}) => {
    try {
        const categoryValue = params.categoryValue;

        if (!categoryValue) {
            throw new Error('Category value is undefined');
        }

        const cocktailsByCategory = await getCocktailsByCategory(categoryValue);

        return { cocktailsByCategory, categoryValue };
    } catch (error) {
        const typedError = error as Error;
        console.error(`{message: ${typedError?.message}}`);
    }
};
