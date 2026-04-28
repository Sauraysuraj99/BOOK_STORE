import express from "express";
import {
  handleCreateNewBook,
  handleDeleteBook,
  handleGetAllBooks,
  handleGetSingleBook,
  handleUpdateBook,
} from "../controllers/book-controllers.js";

const router = express.Router();

router.get("/all-books", handleGetAllBooks);
router.get("/book/:id", handleGetSingleBook);
router.post("/add-book", handleCreateNewBook);
router.put("/update-book/:id", handleUpdateBook);
router.delete("/delete-book/:id", handleDeleteBook);

export default router;
