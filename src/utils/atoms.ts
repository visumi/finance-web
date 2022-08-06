import { atom } from 'jotai';
import { User } from '../models/user';

export const expensesAtom = atom([]);

export const getExpensesAtom = atom(
  (get) => get(expensesAtom),
  (set) => set(expensesAtom)
);

export const userAtom = atom<User>({loggedIn: false});

export const getUserAtom = atom(
  (get) => get(userAtom),
  (set) => set(userAtom)
);