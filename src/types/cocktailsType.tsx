export interface Ingredient {
    name: string;
    measure: string;
}

export interface Cocktail {
    id: string;
    name: string;
    isFavorite: boolean;
    isPopular: boolean;
    category: string;
    alcoholic: string;
    glass: string;
    instructions: string;
    image: string;
    ingredients: Ingredient[];
}

export interface CocktailAPI {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strMeasure1: string;
    strIngredient2: string;
    strMeasure2: string;
    strIngredient3: string;
    strMeasure3: string;
    strIngredient4: string;
    strMeasure4: string;
    strIngredient5: string;
    strMeasure5: string;
    strIngredient6: string;
    strMeasure6: string;
    strIngredient7: string;
    strMeasure7: string;
    strIngredient8: string;
    strMeasure8: string;
    strIngredient9: string;
    strMeasure9: string;
    strIngredient10: string;
    strMeasure10: string;
}

export interface CocktailByIngredient {
    id: string;
    name: string;
    image: string;
}

export interface CocktailByIngredientAPI {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

export interface Category {
    category: string;
    id: number;
}

export interface CocktailAutocomplete {
    name: string;
    id: number | string;
}
