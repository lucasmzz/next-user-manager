import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";
import { UsersPageProps, User } from "../types";

const Users: NextPage<UsersPageProps> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [showUserDetails, setShowUserDetails] = useState<Boolean>(false);

  useEffect(() => {
    setFilteredUsers(users.filter((user) => user.name.includes(searchTerm)));
  }, [searchTerm]);

  const onSearchTermChange = (newTerm: string) => setSearchTerm(newTerm);

  const onUserSelected = (selectedUser: User) => {
    setSelectedUser(selectedUser);
    setShowUserDetails(true);
  };

  const onUserDetailsClose = () => {
    setSelectedUser(undefined);
    setShowUserDetails(false);
  };

  const onFavouriteStatusChange = (user: User) => {
    setFilteredUsers(
      filteredUsers.map((item) => {
        if (item.id === user.id) {
          item.isFavourite = !item.isFavourite;
        }

        return item;
      })
    );
  };

  return (
    <div className="">
      <Head>
        <title>Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Sidebar />
      <div className="relative flex flex-col max-w-7xl mx-auto py-7">
        <Search term={searchTerm} onSearchTermChange={onSearchTermChange} />
        <UserList
          users={filteredUsers}
          onUserSelected={onUserSelected}
          onFavouriteStatusChange={onFavouriteStatusChange}
        />
      </div>

      {selectedUser && showUserDetails && (
        <UserDetails
          user={selectedUser}
          onUserDetailsClose={onUserDetailsClose}
        />
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://6300ff309a1035c7f8fc2586.mockapi.io/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
};

export default Users;
