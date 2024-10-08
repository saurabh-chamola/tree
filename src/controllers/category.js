import asyncHandler from "../utils/asyncHandler.js";
import categoryModel from "../models/category.js";

// @@DESC- creating new category and adding child categories
// @@ROUTE- api/v1/category (POST)
export const newCategory = asyncHandler(async (req, res, next) => {
  const { categoryName, parentCategory } = req?.body; 

  const newCategory = new categoryModel({ categoryName:categoryName, parentCategory: parentCategory ? parentCategory : null });

  await newCategory.save();

  if (parentCategory) { 
    await categoryModel.findOneAndUpdate({ _id: parentCategory }, { $push: { childCategories: newCategory._id } });
  }

  res.status(201).json({ status: true, message: "Created successfully!!" });
});


// @@DESC- fetching parent categories list associated with child categiries
// @@ROUTE- api/v1/category (GET)
export const getCategories = asyncHandler(async (req, res, next) => {
  const categories = await categoryModel.find().populate('childCategories', ["childCategories", "parentCategory", "categoryName", "_id"]);

  const rootCategoryData = {};

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    rootCategoryData[category._id] = { ...category?._doc, childCategories: [] };
  }

  const finalCategoryList = [];

  for (let i = 0; i < categories.length; i++) {
    const currentCategory = categories[i];

    currentCategory?.parentCategory
      ? rootCategoryData[currentCategory.parentCategory].childCategories.push(rootCategoryData[currentCategory._id])
      : finalCategoryList.push(rootCategoryData[currentCategory._id]);
  }

  res.status(200).json({ status: true, data: finalCategoryList, message: "Get successfully!!" });
});
