import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, "category name is required!!"]
  },
  parentCategory: {
    type: mongoose.Types.ObjectId,
    ref: 'category',
    default: null
  },
  childCategories: [{
    type: mongoose.Types.ObjectId,
    ref: 'category'
  }]
}, { timestamps: true });

export default mongoose.model("category", categorySchema);
