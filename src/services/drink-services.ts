
import DrinkModel from "../model/drink-model";
import * as drinkRepository from "../repository/drink-repository"
import * as httpHelper from "../utils/http-helper"


export const getDrinkService = async (drinkData: any) => {
    const data = await drinkRepository.findByName(drinkData.name,);
    let response = null

    if (data) {
        response = httpHelper.ok(data as any);
    } else {
        response = httpHelper.noContent();
    }
    return response
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

export const deleteDrinkService = async (name: string) =>{
    let response = null;
    const isDelete = await drinkRepository.deleteDrink(name)

    if(isDelete){
        response = await httpHelper.ok(null)
    }else {
        response = httpHelper.badRequest();
    }
    return response
}

export const updateDrinkService = async (name: string, preparation: string, description: string, alcoholContent: number) => {
    const data = await drinkRepository.findByName(name);
    let response = null;

    if (!preparation && !description && !alcoholContent) {
        response = httpHelper.badRequest();
        return response
    } else {
        response = httpHelper.ok(null);
    }
    return response;
}