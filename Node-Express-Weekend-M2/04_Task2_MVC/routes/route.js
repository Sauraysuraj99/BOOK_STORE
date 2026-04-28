import { Router } from "express";
import {
  getHTMLFile,
  handleSubmitForm,
  getAllUsers,
} from "../controllers/controller.js";

const router = Router();

router.get("/", getHTMLFile);
router.post("/submit", handleSubmitForm);
router.get("/all", getAllUsers);

export default router;
