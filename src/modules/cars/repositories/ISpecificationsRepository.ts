import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTP {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationDTP): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTP };
