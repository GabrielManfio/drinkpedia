import { Router } from "express";
import { drinks } from "../model/drink-data";

const router = Router();

router.get("/drinks", (req, res) => {
    res.send(drinks);
});

export default router;
