import express from "express";
const router = express.Router();

import { signin, signup, users } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/users", users);

export default router;
