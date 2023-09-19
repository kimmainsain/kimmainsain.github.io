import React from "react";
import profileImage from "../assets/images/profileImage.jpg";

const UserInfo = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-full h-1/2 bg-black p-8 rounded-lg flex items-center">
        <div className="flex-grow"></div>
        <div className="flex-grow-0 flex-1 text-white space-y-4 flex-col flex mr-8">
          <div className="text-4xl font-bold">김민섭</div>
          <a
            href="https://github.com/kimmainsain"
            className="text-xl hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://velog.io/@kimmainsain"
            className="text-xl hover:underline"
          >
            Blog
          </a>
          <a
            href="mailto:devsain0621@gmail.com"
            className="text-xl hover:underline"
          >
            devsain0621@gmail.com
          </a>
        </div>
        <div className="ml-12">
          <img
            src={profileImage}
            alt="김민섭"
            className="w-48 h-48 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="flex-grow"></div>
      </div>
    </div>
  );
};

export default UserInfo;
