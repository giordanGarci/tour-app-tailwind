import { Category } from "../categorias/category";

export class Place {
    id?: number;
    name?: string;
    category?: Category;
    location?: string;
    description?: string;
    urlPhoto?: string;
    rating?: number;
}
