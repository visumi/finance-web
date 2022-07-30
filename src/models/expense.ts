import Category from "./category";

export interface Expense {
  name: string;
  category: Category;
  date: string;
  method: string;
  price: string;
}