export interface User {
  id: number;
  name: string;
  avatar: string;
  createdAt: string;
  posts: number;
  isFavourite: boolean;
}

export interface UsersPageProps {
  users: Array<User>;
}
