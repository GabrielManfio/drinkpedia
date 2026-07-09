
import { ParsedQs } from "qs";
import DrinkModel from "../model/drink-model";
import HttpResponse from "../model/http-response";
import * as drinkRepository from "../repository/drink-repository"
import * as httpHelper from "../utils/http-helper"


export const getAllDrinksService = async (query: ParsedQs): Promise<HttpResponse> => {
  const data = await drinkRepository.findAllDrinks();
  return httpHelper.ok(data);
};

export const getDrinkByNameService = async (name: string): Promise<HttpResponse> => {
  const data = await drinkRepository.findByName(name);
  if (data) return httpHelper.ok(data);
  return httpHelper.noContent();
};

export const createDrinkService = async (drinks: DrinkModel) =>{
    let response = null;

    if(Object.keys(drinks).length !== 0){
        await drinkRepository.insertDrink(drinks);
        response = httpHelper.created(drinks as any);
    } else {
        response = await httpHelper.badRequest()
    }
    return response
}

export const deleteDrinkService = async (name: string) => {
    const isDelete = await drinkRepository.deleteDrink(name);

    if (isDelete) {
        return httpHelper.ok("Drink deleted");
    } else {
        return httpHelper.notFound();
    }
}

export const updateDrinkService = async (name: string, preparation: string, description: string, alcoholContent: number) => {
    const data = await drinkRepository.findByName(name);

    if (!data) {
        return httpHelper.notFound();
    }

    if (!preparation && !description && !alcoholContent) {
        return httpHelper.badRequest();
    }

    const updated = await drinkRepository.findAndModifyDrink(
        name,
        preparation,
        description,
        alcoholContent
    );

    return httpHelper.ok(updated);
};