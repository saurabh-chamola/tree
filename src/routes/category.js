import express from "express";
import { getCategories, newCategory } from "../controllers/category.js";
const router = express.Router();

router.route("/").post(newCategory).get(getCategories);
export default router;
