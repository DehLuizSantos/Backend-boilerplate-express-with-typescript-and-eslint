import { Category } from "../../model/Category";
import { ICategoriesRespository } from "../../repositories/ICategoriesResposiory";

class ListCategoriesUseCase {
  constructor(private categoriesResponsitory: ICategoriesRespository) {}
  execute(): Category[] {
    const categories = this.categoriesResponsitory.list();
    return categories;
  }
}
export { ListCategoriesUseCase };
