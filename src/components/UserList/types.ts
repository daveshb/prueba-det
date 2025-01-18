export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

export interface Results {
  total: number;
  limit: number;
  skip: number;
  users: User[];
}
