import {drinks} from "../model/drink-data";
import DrinkModel from "../model/drink-model";

export const drinkRepository = {
    findAll(): DrinkModel[] {
        return drinks
    },

    findByName(name:string): DrinkModel | undefined{
        return drinks.find(
            drink => drink.name === name)
    }
};
