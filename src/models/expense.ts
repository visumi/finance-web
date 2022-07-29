import Category from "./category";

export interface Expense {
  category: Category;
  date: string;
  method: string;
  value: string;
}