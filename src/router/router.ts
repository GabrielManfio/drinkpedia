import { Router } from "express";
import { deleteDrink, getDrink, postDrink, updateDrink } from "../controller/drink-controller";

const router = Router();

router.get("/drinks", getDrink)
router.post("/drinks", postDrink)

router.delete("/drink/:name", deleteDrink)

router.patch("/drinks/:name", updateDrink)

export default router;
