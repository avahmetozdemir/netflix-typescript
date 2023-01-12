import React, { useEffect, useLayoutEffect } from "react";
import UserLogin from "../components/StartingPage/UserLogin";
import plusIcon from "../assets/icons/plus.png";
import { Link, redirect, useNavigate } from "react-router-dom";
const users = [
  {
    id: 1,
    image:
      "https://nextluxury.com/wp-content/uploads/Homer-Simpson-e1648441168355.jpg",
    name: "Yüksel",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqiJdk9eigV_PcJoKhZ95OZaLAkQ5YQ9z8bgIRkLp4EkIgZzHmb96nF3dbDqoNKPDv7k&usqp=CAU",
    name: "Ahmet",
  },
  {
    id: 3,
    image:
      "https://64.media.tumblr.com/b29d66d276cd8070d29ff53df060ee4d/tumblr_nrwp8j6yzZ1rxw2uko8_1280.jpg",
    name: "Ebrar",
  },
  {
    id: 4,
    image: plusIcon,
    name: "Add Profile",
  },
];

function StartingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#181512] flex justify-center items-center ">
      <div className="flex flex-col">
        <h1 className="text-white text-center text-4xl mb-4">
          Who's watching?
        </h1>
        <Link to="/browse">
          <div className="flex flex-row mb-5">
            {users.map((user) => (
              <UserLogin
                manageProfile={false}
                name={user.name}
                imgUrl={user.image}
              />
            ))}
          </div>
        </Link>
        <div className="border border-white w-[150px] mx-auto cursor-pointer ">
          <h1 className="text-center text-white p-2">
            <Link to="/profiles/manage">Manage Profiles</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default StartingPage;
