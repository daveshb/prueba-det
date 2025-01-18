import "./style.scss";
import SearchBar from "../Shared/SearchBar";
import Pagination from "../Shared/Pagination";
import { User } from "./types";
import useUserList from "./hooks";
import { Avatar, Spinner } from "@heroui/react";

const UserList: React.FC<{ onUserSelected?: (user: User) => void }> = ({
  onUserSelected,
}) => {
  const {
    usersData,
    currentPage,
    searchQuery,
    loading,
    setCurrentPage,
    setSearchQuery,
    amountPages,
  } = useUserList();

  return (
    <div>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <table className="table table--full-width table--bordered">
          <thead className="table__head">
            <tr className="table__row table__row--header">
              <th className="table__cell table__cell--header">Nombre</th>
              <th className="table__cell table__cell--header">Apellido</th>
              <th className="table__cell table__cell--header">Email</th>
              <th className="table__cell table__cell--header">Foto</th>
              <th className="table__cell table__cell--header">Acción</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {usersData?.users.map((user: User) => (
              <tr
                key={user.id}
                className="table__row table__row--clickable"
                onClick={() => onUserSelected?.(user)}
              >
                <td className="table__cell table__cell--data">
                  {user.firstName}
                </td>
                <td className="table__cell table__cell--data">
                  {user.lastName}
                </td>
                <td className="table__cell table__cell--data">{user.email}</td>
                <td className="table__cell table__cell--actions">
                  <Avatar size="md" src={user.image} />
                </td>
                <td className="table__cell table__cell--actions">
                  Seleccionar
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="user-list__pagination">
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          amountPages={amountPages}
        />
      </div>
    </div>
  );
};

export default UserList;
