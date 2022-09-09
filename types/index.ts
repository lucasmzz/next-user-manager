export interface User {
  id: number;
  name: string;
  avatar: string;
  createdAt: string;
}

export interface UsersPageProps {
  users: Array<User>;
}
