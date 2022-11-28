import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesResponsitory: CategoriesRepository) {}
  async execute(): Promise<Category[]> {
    const getCategories = await this.categoriesResponsitory.list();
    return getCategories;
  }
}
export { ListCategoriesUseCase };
