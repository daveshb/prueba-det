import { useEffect, useMemo, useState } from 'react';
import { fetchUsers } from './api';
import { Results } from './types';

const useUserList = () => {
  const [usersData, setUsersData] = useState<Results | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const limitResult = 10;

  const amountPages = useMemo(() => {
    return usersData?.total ? Math.ceil(usersData.total / limitResult) : 0;
  }, [usersData?.total, limitResult]);

  useEffect(() => {
    setLoading(true);
    fetchUsers(currentPage, searchQuery, limitResult)
      .then((data) => setUsersData(data))
      .finally(() => setLoading(false));
  }, [currentPage, searchQuery]);

  return {
    usersData,
    currentPage,
    searchQuery,
    loading,
    setCurrentPage,
    setSearchQuery,
    limitResult,
    amountPages
  };
}

export default useUserList;