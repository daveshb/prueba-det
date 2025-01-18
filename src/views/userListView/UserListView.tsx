import React, { useState } from "react";
import UserList from "../../components/UserList";
import { User } from "../../components/UserList/types";

const UserListView: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="user-list">
  <h1 className="user-list__title">Lista de usuarios Domina entrega total</h1>
  <div className="user-list__content">
    <UserList
      onUserSelected={(user) => setSelectedUser(user)}
    />
  </div>
  {selectedUser && (
    <div className="user-list__details">
      <h2 className="user-list__details-title">Usuario seleccionado</h2>
      <p className="user-list__details-item">Nombre: {selectedUser.firstName}</p>
      <p className="user-list__details-item">Email: {selectedUser.email}</p>
    </div>
  )}
</div>
  );
};

export default UserListView;
