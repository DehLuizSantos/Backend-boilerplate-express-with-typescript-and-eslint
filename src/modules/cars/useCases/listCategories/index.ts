import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesControler } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

export default (): ListCategoriesControler => {
  const categoriesRepository = new CategoriesRepository();

  const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

  const listCategoriesController = new ListCategoriesControler(
    listCategoriesUseCase
  );

  return listCategoriesController;
};
