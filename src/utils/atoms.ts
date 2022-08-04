import { atom } from 'jotai';

export const expensesAtom = atom([]);

export const getExpensesAtom = atom(
  (get) => get(expensesAtom),
  (set) => set(expensesAtom)
);
