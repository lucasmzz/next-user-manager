import { useState, useEffect } from "react";
import { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import type { User } from "../types";

interface Props {
  users: User[];
  onUserSelected: (user: User) => void;
}

const UserList: NextComponentType<NextPageContext, {}, Props> = ({
  users,
  onUserSelected,
}) => {
  const [paginatedList, setPaginatedList] = useState<Array<User[]>>([]);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPerPage, setMaxPerPage] = useState(10);

  useEffect(() => {
    paginateUsersList();
  }, [users, maxPerPage]);

  useEffect(() => {
    if (paginatedList.length > 0)
      setPageNumbers(Array.from(Array(paginatedList.length).keys()));
  }, [paginatedList]);

  const paginateUsersList = () => {
    if (Array.isArray(users) && users.length > 0) {
      const finalList: Array<User[]> = [];

      for (let i = 0; i < users.length; i += maxPerPage) {
        const page: User[] = users.slice(i, i + maxPerPage);
        finalList.push(page);
      }

      setPaginatedList(finalList);
    }
  };

  return (
    <div className="flex flex-col gap-y-1 mt-5 mx-7">
      {users &&
        paginatedList &&
        paginatedList[currentPage]?.map((user: User) => {
          const date = new Date(user.createdAt);
          const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
          return (
            <div
              key={user.name}
              className="flex justify-between items-center pr-3 border cursor-pointer transition duration-150 ease-in-out hover:bg-gray-100"
              onClick={() => onUserSelected(user)}
            >
              <div className="flex gap-2 items-center">
                <Image
                  src={user.avatar}
                  alt="User Logo"
                  className="mr-3"
                  width={50}
                  height={50}
                />
                <p>{user.name}</p>
              </div>
              <p>{formattedDate}</p>
            </div>
          );
        })}

      <div className="flex justify-between bg-gray-200 px-3 py-1 rounded-md text-sm">
        <div className="flex items-center gap-5">
          <p>
            <span className="font-bold">{users.length}</span> user
            {users.length > 1 && "s"}
          </p>
          {paginatedList.length > 1 && (
            <div className="flex gap-2">
              <p>Per page:</p>
              <select
                defaultValue="10"
                onChange={(event) => setMaxPerPage(Number(event.target.value))}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          )}
        </div>
        {pageNumbers && pageNumbers.length > 1 && (
          <div className="flex gap-3">
            {pageNumbers.map((key) => (
              <span
                key={key}
                className={`${
                  key === currentPage && "text-green-700 font-bold"
                } cursor-pointer hover:text-blue-700 hover:font-bold transition duration-150 ease-in-out hover:scale-105`}
                onClick={() => setCurrentPage(key)}
              >
                {key + 1}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
