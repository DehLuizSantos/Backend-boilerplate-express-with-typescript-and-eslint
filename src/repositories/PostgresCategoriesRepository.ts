import { Category } from "../modules/Category";
import {
  ICategoriesRespository,
  ICreateCategoryDTO,
} from "./ICategoriesResposiory";

class PostgresCategoriesRepository implements ICategoriesRespository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}
export { PostgresCategoriesRepository };
