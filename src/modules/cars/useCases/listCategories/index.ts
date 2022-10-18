import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesControler } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesControler = new ListCategoriesControler(
  listCategoriesUseCase
);

export { listCategoriesControler };
