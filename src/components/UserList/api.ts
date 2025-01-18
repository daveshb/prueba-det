export const fetchUsers = async (page: number, query: string, limitResult:number) => {

  const skip = (page -1) * limitResult;
    const response = await fetch(
      `https://dummyjson.com/users/search?q=${query}&limit=${limitResult}&skip=${skip}&sortBy=firstName&order=asc`
    );
    return response.json();
  };