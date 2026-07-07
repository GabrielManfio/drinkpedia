import { Request, Response } from "express";
import { drinkRepository } from "../repository/drink-repository";

export function getDrinks(req: Request, res: Response) {
    const drinks = drinkRepository.findAll();

    res.json(drinks);
}

export function getDrink(req: Request, res: Response) {

    const { name } = req.params;

    const drink = drinkRepository.findByName(Array.isArray(name) ? name[0] : name);

    if (!drink) {
        return res.status(404).json({
            message: "Drink não encontrado"
        });
    }

    res.json(drink);
}