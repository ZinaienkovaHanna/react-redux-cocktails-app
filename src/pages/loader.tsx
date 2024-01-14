import { Params } from 'react-router-dom';
import {
    getCocktailById,
    getCocktailsByName,
    getCocktailsByIngredient,
    getCocktailsByCategory,
} from '../services/cocktailsAPI';

export const cocktailLoader = async ({ params }: { params: Params<'cocktailId'> }) => {
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

export const cocktailsByNameLoader = async ({ params }: { params: Params<'searchByName'> }) => {
    try {
        const name = params.searchByName;

        if (!name) {
            throw new Error('Cocktail value is undefined');
        }

        const cocktailsSearchByName = await getCocktailsByName(name);

        return { cocktailsSearchByName, name };
    } catch (error) {
        const typedError = error as Error;
        console.error(`{message: ${typedError?.message}}`);
        return { cocktailsSearchByName: [] };
    }
};

export const cocktailsByIngredientLoader = async ({
    params,
}: {
    params: Params<'searchByIngredient'>;
}) => {
    try {
        const ingredient = params.searchByIngredient;

        if (!ingredient) {
            throw new Error('Ingredient value is undefined');
        }

        const cocktailsByIngredient = await getCocktailsByIngredient(ingredient);

        return { cocktailsByIngredient, ingredient };
    } catch (error) {
        const typedError = error as Error;
        console.error(`{message: ${typedError?.message}}`);
        return { cocktailsByIngredient: [] };
    }
};

export const cocktailsByCategoryLoader = async ({
    params,
}: {
    params: Params<'searchByCategory'>;
}) => {
    try {
        const category = params.searchByCategory;

        if (!category) {
            throw new Error('Category value is undefined');
        }

        const cocktailsByCategory = await getCocktailsByCategory(category);

        return { cocktailsByCategory, category };
    } catch (error) {
        const typedError = error as Error;
        console.error(`{message: ${typedError?.message}}`);
    }
};
