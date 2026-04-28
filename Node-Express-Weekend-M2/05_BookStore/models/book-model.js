import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true,
      maxLength: [100, "Title cannot exceed 100 characters"],
    },
    author: {
      type: String,
      required: [true, "Please provide a author name"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Please provide a publication year"],
      min: [1000, "Publication date cannot be less than 1000"],
      max: [
        new Date().getFullYear(),
        "Publication date cannot exceed current year",
      ],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Book", BookSchema);
