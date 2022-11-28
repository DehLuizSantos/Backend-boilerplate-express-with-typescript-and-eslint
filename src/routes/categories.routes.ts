import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategory";
import { uploadFileCategoryController } from "../modules/cars/useCases/importCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.get("/categories", (req, res) => {
  return listCategoriesController().handle(req, res);
});
categoriesRoutes.post("/categories", (req, res) =>
  createCategoryController().handle(req, res)
);
categoriesRoutes.post("/upload", upload.single("file"), (req, res) =>
  uploadFileCategoryController().handle(req, res)
);

export { categoriesRoutes };
