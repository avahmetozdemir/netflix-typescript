import React from "react";
import UserLogin from "../components/StartingPage/UserLogin";
import plusIcon from "../assets/icons/plus.png";
import { Link } from "react-router-dom";
const users = [
  {
    id: 1,
    image:
      "https://nextluxury.com/wp-content/uploads/Homer-Simpson-e1648441168355.jpg",
    name: "Yüksel",
    manage: true,
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqiJdk9eigV_PcJoKhZ95OZaLAkQ5YQ9z8bgIRkLp4EkIgZzHmb96nF3dbDqoNKPDv7k&usqp=CAU",
    name: "Ahmet",
    manage: true,
  },
  {
    id: 3,
    image:
      "https://64.media.tumblr.com/b29d66d276cd8070d29ff53df060ee4d/tumblr_nrwp8j6yzZ1rxw2uko8_1280.jpg",
    name: "Ebrar",
    manage: true,
  },
  {
    id: 4,
    image: plusIcon,
    name: "Add Profile",
    manage: false,
  },
];

function ManageProfiles() {
  return (
    <div className="min-h-screen bg-[#181512] flex justify-center items-center ">
      <div className="flex flex-col">
        <h1 className="text-white text-center text-[60px] mb-4">
          Manage Profiles:
        </h1>
        <Link to="/browse">
          <div className="flex flex-row mb-5">
            {users.map((user) => (
              <UserLogin
                manageProfile={true}
                name={user.name}
                imgUrl={user.image}
                manage={user.manage}
              />
            ))}
          </div>
        </Link>
        <div className="border border-white w-[150px] mx-auto cursor-pointer ">
          <h1 className="text-center bg-white text-[#181818] font-semibold p-2">
            <Link to="/">Done</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ManageProfiles;
