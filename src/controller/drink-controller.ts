import { Request, Response } from "express";
import { createDrinkService, deleteDrinkService, getAllDrinksService, updateDrinkService } from "../services/drink-services";
import HttpResponse from "../model/http-response";
import { noContent } from "../utils/http-helper";
import DeleteDrinkParams from "../model/delete-drink";
import { drinks } from "../model/drink-data";

export const getDrink = async (req: Request, res: Response) =>{
    const httpResponse = await getAllDrinksService(req.query)
    
    res.status(httpResponse.statusCode).json(httpResponse.body)
};

export const postDrink = async (req: Request, res: Response) =>{
 const bodyValue = req.body;
 const httpResponse = await createDrinkService(bodyValue) 
 
 if (httpResponse){
    res.status(httpResponse.statusCode).json(httpResponse.body)
 } else {
    const response = await noContent()
 }
}


export const deleteDrink = async (
    req: Request<DeleteDrinkParams>,
    res: Response
) => {
    const { name } = req.params;

    const httpResponse = await deleteDrinkService(name);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updateDrink = async (
    req: Request<DeleteDrinkParams>,
    res: Response
) => {
    const { name } = req.params;
    const { preparation, description, alcoholContent } = req.body;

    const httpResponse = await updateDrinkService(
        name,
        preparation,
        description,
        alcoholContent
    );

    res.status(httpResponse.statusCode).json(httpResponse.body);
}