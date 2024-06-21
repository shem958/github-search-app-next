import React from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaBuilding,
  FaMapMarkerAlt,
  FaLink,
  FaGithub,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

interface User {
  avatar_url: string;
  name: string;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  company: string;
  twitter_username: string;
}

const UserCard: React.FC<{ user: User | null }> = ({ user }) => {
  const { darkMode } = useTheme();

  if (!user) {
    return null;
  }

  return (
    <div
      className={`p-8 w-full rounded-xl shadow-md ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="relative h-32 w-32 rounded-full overflow-hidden">
          <Image
            src={user.avatar_url}
            alt={`${user.name}'s avatar`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1">
          <div
            className={`text-xl font-medium ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {user.name}
          </div>
          <p
            className={`text-gray-500 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {user.login}
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <p
          className={`text-gray-500 flex items-center ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <FaGithub className="mr-2" /> <strong>Repos:</strong>{" "}
          {user.public_repos}
        </p>
        <p
          className={`text-gray-500 flex items-center ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <strong>Followers:</strong> {user.followers}
        </p>
        <p
          className={`text-gray-500 flex items-center ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <strong>Following:</strong> {user.following}
        </p>
      </div>
      <div className="mt-4 text-sm text-gray-500 space-y-1">
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2" /> <strong>Location:</strong>{" "}
          {user.location || "Not Available"}
        </p>
        <p className="flex items-center">
          <FaLink className="mr-2" /> <strong>Blog:</strong>{" "}
          {user.blog ? (
            <a
              href={user.blog}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-blue-500 ${
                darkMode ? "dark:text-blue-400" : ""
              }`}
            >
              {user.blog}
            </a>
          ) : (
            "Not Available"
          )}
        </p>
        <p className="flex items-center">
          <FaBuilding className="mr-2" /> <strong>Company:</strong>{" "}
          {user.company || "Not Available"}
        </p>
        <p className="flex items-center">
          <FaTwitter className="mr-2" /> <strong>Twitter:</strong>{" "}
          {user.twitter_username ? (
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-blue-500 ${
                darkMode ? "dark:text-blue-400" : ""
              }`}
            >
              @{user.twitter_username}
            </a>
          ) : (
            "Not Available"
          )}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
