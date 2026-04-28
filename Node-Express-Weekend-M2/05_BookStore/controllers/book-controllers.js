import Book from "../models/book-model.js";

async function handleCreateNewBook(req, res) {
  try {
    const newBookData = req.body;
    let newlyCreatedBook = await Book.create(newBookData);
    res.status(201).json({
      success: true,
      message: "Book Created",
      data: newlyCreatedBook,
    });
  } catch ({ errors }) {
    res.status(400).json({
      success: false,
      message: "Unable to create a book",
      data: errors,
    });
  }
}

async function handleGetAllBooks(req, res) {
  try {
    const allBooks = await Book.find({});

    if (allBooks.length > 0) {
      res.status(200).json({
        success: true,
        message: "Fetched all Books",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

async function handleGetSingleBook(req, res) {
  try {
    const BookID = req.params.id;
    let data = await Book.findById(BookID);

    if (data) {
      res.status(200).json({
        success: true,
        message: "Fetched Single Book",
        data,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went worng",
    });
  }
}

async function handleUpdateBook(req, res) {
  try {
    const bookID = req.params.id;
    const updatedBookData = req.body;

    let data = await Book.findByIdAndUpdate(bookID, updatedBookData, {
      new: true,
    });

    if (data) {
      res.status(200).json({
        success: true,
        message: "Book Updated successfully",
        data,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went worng",
    });
  }
}

async function handleDeleteBook(req, res) {
  try {
    let bookID = req.params.id;
    let data = await Book.findByIdAndDelete(bookID);

    if (data) {
      res.status(200).json({
        success: true,
        message: "Book Deleted",
        data,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book Not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went worng",
    });
  }
}

export {
  handleCreateNewBook,
  handleDeleteBook,
  handleGetAllBooks,
  handleGetSingleBook,
  handleUpdateBook,
};
