import { useState } from "react";
import { ContextDet } from "./Context";
import { User } from "../components/UserList/types";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const Provider = ({ children }: props) => {

  const [loggedUser, setLoggedUser] = useState('David Henao');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <ContextDet.Provider
      value={{
        loggedUser,
        setLoggedUser,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </ContextDet.Provider>
  );
};