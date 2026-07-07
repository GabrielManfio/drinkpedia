import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Drinkpedia API");
});

export default router;