import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaBuilding,
  FaMapMarkerAlt,
  FaLink,
  FaGithub,
  FaSearch,
  FaSpinner,
} from "react-icons/fa";

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
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotFound(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="p-8 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
          <div className="text-center text-gray-500">
            <FaSearch className="mx-auto text-4xl mb-4" />
            {showNotFound ? (
              <p>User not found</p>
            ) : (
              <p>Search for a Github user</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Show loading spinner if user data is not yet available
  if (!user.name) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin h-12 w-12 text-gray-500" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 w-96 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
        <div className="flex items-center space-x-6">
          <div className="relative h-24 w-24 rounded-full overflow-hidden">
            <Image
              src={user.avatar_url}
              alt={`${user.name}'s avatar`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <div className="text-2xl font-medium text-black dark:text-white">
              {user.name}
            </div>
            <p className="text-gray-500 dark:text-gray-400">{user.login}</p>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <p className="text-gray-500 dark:text-gray-400 flex items-center">
            <FaGithub className="mr-2" />{" "}
            <strong className="mr-1">Repos:</strong> {user.public_repos}
          </p>
          <p className="text-gray-500 dark:text-gray-400 flex items-center">
            <strong className="mr-1">Followers:</strong> {user.followers}
          </p>
          <p className="text-gray-500 dark:text-gray-400 flex items-center">
            <strong className="mr-1">Following:</strong> {user.following}
          </p>
        </div>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 space-y-1">
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />{" "}
            <strong className="mr-1">Location:</strong>{" "}
            {user.location || "Not Available"}
          </p>
          <p className="flex items-center">
            <FaLink className="mr-2" /> <strong className="mr-1">Blog:</strong>{" "}
            {user.blog ? (
              <a
                href={user.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400"
              >
                {user.blog}
              </a>
            ) : (
              "Not Available"
            )}
          </p>
          <p className="flex items-center">
            <FaBuilding className="mr-2" />{" "}
            <strong className="mr-1">Company:</strong>{" "}
            {user.company || "Not Available"}
          </p>
          <p className="flex items-center">
            <FaTwitter className="mr-2" />{" "}
            <strong className="mr-1">Twitter:</strong>{" "}
            {user.twitter_username ? (
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400"
              >
                @{user.twitter_username}
              </a>
            ) : (
              "Not Available"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
