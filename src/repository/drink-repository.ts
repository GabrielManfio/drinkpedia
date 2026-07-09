import {drinks} from "../model/drink-data";
import DrinkModel from "../model/drink-model";


const database = drinks

export const findByName = async (name: string): Promise<DrinkModel | undefined> => {
  return database.find((drink) => drink.name === name);
  
};
export const insertDrink = async(drink: DrinkModel): Promise<DrinkModel[]> => {
    database.push(drink);
    return database;
}

export const deleteDrink = async(name: string) => {
    const index = database.findIndex((drink)=> drink.name === name)
    if (index > -1) {
        database.splice(index, 1);
        return true
    }
    return false;
}

export const findAndModifyDrink = async (name:string, preparation: string, description: string, alcoholContent: number) => {
    const drinkIndex = database.findIndex((drink) => drink.name === name);

    if(drinkIndex !== -1) {
        database[drinkIndex].description = description
        database[drinkIndex].alcoholContent = alcoholContent
        database[drinkIndex].preparation = preparation
        return database[drinkIndex]
    }
    return database[drinkIndex];
}


export const findAllDrinks = async (): Promise<DrinkModel[]> => {
  return database;
};

