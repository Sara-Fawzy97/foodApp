import { ICategory } from './ICategory';

export interface IRecipe {
  name: string;
  id: number;
  description: string;
  price: number;
  tagId: {
    id: string;
    name: string;
  };
  imagePath: string;
  categoriesIds: ICategory[];
}
