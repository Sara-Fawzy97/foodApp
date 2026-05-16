import { IRecipe } from "../../recipes/models/IRecipe";

export interface ICategory{
    name:string;
    id?:string;
    creationDate:string;
    modificationDate:string;
    recipe:IRecipe[]
}