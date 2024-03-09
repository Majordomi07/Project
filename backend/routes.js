import express from "express";

import { showCars, removeCar } from "./controllers/cars.js";
import { login, register } from "./controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/cars", showCars);
router.delete("/delete/:id", removeCar);

export default router;
