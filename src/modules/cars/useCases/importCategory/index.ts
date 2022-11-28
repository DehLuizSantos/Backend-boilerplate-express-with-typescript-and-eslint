import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

export function uploadFileCategoryController() {
  const categoryRepository = new CategoriesRepository();

  const uploadFileCategoryUseCase = new ImportCategoryUseCase(
    categoryRepository
  );

  const uploadFileCategoryController = new ImportCategoryController(
    uploadFileCategoryUseCase
  );

  return uploadFileCategoryController;
}
