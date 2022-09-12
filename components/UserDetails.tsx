import { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import type { User } from "../types";
import { FiX } from "react-icons/fi";
interface Props {
  user: User;
  onUserDetailsClose: () => void;
}

const UserDetails: NextComponentType<NextPageContext, {}, Props> = ({
  user,
  onUserDetailsClose,
}) => {
  const date = new Date(user.createdAt);
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <div
      className="absolute top-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm duration-300"
      onClick={onUserDetailsClose}
    >
      <div
        className="bg-white absolute w-1/5 h-1/2 flex flex-col gap-10 items-center align-start rounded-md overflow-hiddennpmn bg-opacity-80"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={user.avatar}
          alt="UserAvatar"
          width="300"
          height="300"
          className="w-full h-60 object-cover"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">{user.name}</h1>
          <small className="text-gray-600 italic">
            Active since <span className="font-bold">{formattedDate}</span>
          </small>
        </div>
        <a
          className="absolute top-2 right-2 cursor-pointer bg-red-400 rounded-full p-1"
          onClick={onUserDetailsClose}
        >
          <i className="text-gray-600 text-3xl hover:text-black transition duration-150 ease-in-out hover:scale-110">
            <FiX />
          </i>
        </a>
      </div>
    </div>
  );
};

export default UserDetails;
