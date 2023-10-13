import React from "react";

const App = () => {
  return (
    <div className="w-full h-screen relative m-0 p-0 box-border">
      <div className="z-80 w-full h-12 bg-white border-2 border-solid border-black justify-start items-center flex absolute top-0 overflow-hidden">
        <div className="marquee__inner">위</div>
      </div>

      <div className="z-80 w-full h-12 bg-white border-2 border-solid border-black justify-start items-center flex absolute bottom-0 overflow-hidden">
        <div className="marquee__inner">아래</div>
      </div>

      <div className="z-90 w-12 h-screen bg-white border-2 border-solid border-black justify-center items-start flex absolute right-0 overflow-hidden">
        <div className="marquee__inner">오른쪽</div>
      </div>

      <div className="z-90 w-12 h-screen bg-white border-2 border-solid border-black justify-center items-start flex absolute left-0 overflow-hidden">
        <div className="marquee__inner">왼쪽</div>
      </div>

      <div className="group m-12 absolute top-0 bottom-0 left-0 right-0">
        <div className="hover:text-red-500 transition duration-500 hover:scale-125 z-10 w-3/5 h-2/5 bg-white border-2 border-black justify-center items-center flex absolute top-0 left-0">
          Contact
        </div>
        <div className="hover:text-blue-500 transition duration-500 hover:scale-125 z-10 w-2/5 h-3/5 bg-white border-2 border-black justify-center items-center flex absolute top-0 right-0">
          History
        </div>
        <div className="hover:text-gray-500 transition duration-500 hover:scale-125 z-10 w-2/5 h-3/5 bg-white border-2 border-black justify-center items-center flex absolute bottom-0 left-0">
          Project
        </div>
        <div className="hover:text-sky-500 transition duration-500 hover:scale-125 z-10 w-3/5 h-2/5 bg-white border-2 border-black justify-center items-center flex absolute bottom-0 right-0">
          Strength
        </div>
        <div className="hover:text-yellow-500 transition duration-500 hover:scale-125 z-10 w-1/5 h-1/5 bg-purple-500 border-2 border-black justify-center items-center flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          UserInfo
        </div>
      </div>
    </div>
  );
};

export default App;
