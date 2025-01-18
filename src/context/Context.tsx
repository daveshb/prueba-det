import { createContext } from "react";
import { User } from "../components/UserList/types";

export type contextProps = {
  loggedUser: string | null;
  setLoggedUser: (user: string) => void;
  selectedUser: User | null;
  setSelectedUser: (user: User) => void;
};
export const ContextDet = createContext({} as contextProps);
