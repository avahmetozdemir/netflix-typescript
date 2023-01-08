import React from "react";
import Navbar from "../components/UI/Navbar";
import { MdOutlineVideoLibrary, MdFiberNew } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import Footer from "../components/HomePage/Footer";

function AccountPage() {
  return (
    <div>
      <Navbar />
      <div className="w-[1000px] mx-auto">
        <div className="flex border-b border-gray-500 space-x-3 items-center p-2">
          <h1 className="text-4xl">Account</h1>
          <MdOutlineVideoLibrary color="red" />
          <h3 className=" text-gray-600">
            Member Since <span>March 2020</span>
          </h3>
        </div>
        <div className="flex justify-between p-2">
          <div className=" flex flex-col flex-2/5 space-y-2">
            <h2 className="text-gray-500 text-lg">MEMBERSHIP & BILLING</h2>
            <div className="flex bg-gray-200 justify-center cursor-pointer w-[200px] ">
              <h3 className="text-black text-center p-3">Cancel Membership</h3>
            </div>
          </div>
          <div className="flex flex-3/5 flex-col">
            <div className="flex flex-col border-b border-gray-300">
              <div className="flex justify-between">
                <p>yukseelozdemir@gmail.com</p>
                <p className="text-blue-600 hover:underline cursor-pointer">
                  Change account email
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  Password : <span>********</span>
                </p>
                <p className="text-blue-600 hover:underline cursor-pointer">
                  Change password
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  Phone: <span>0538 383 47 74</span>
                </p>
                <p className="text-blue-600 hover:underline cursor-pointer">
                  Change phone number
                </p>
              </div>
            </div>
            <div className="mt-2 border-b border-gray-300 space-y-2">
              <div className="flex justify-between">
                <div className="flex flex-row space-x-2">
                  <FaCcVisa size={20} />
                  <p>
                    **** **** ****<span> 0120</span>
                  </p>
                </div>
                <p className="text-blue-600 hover:underline cursor-pointer">
                  Manage payment info
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  Your next billing date is <span>January 28,2023</span>
                </p>

                <p className="text-blue-600 hover:underline cursor-pointer">
                  Manage payment info
                </p>
              </div>
              <div className="flex justify-end">
                <p className="text-blue-600 hover:underline cursor-pointer">
                  Manage payment info
                </p>
              </div>
              <div className="flex justify-end">
                <p className="text-blue-600 hover:underline cursor-pointer">
                  Manage payment info
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between border-b border-gray-300 p-2">
          <h1 className="text-gray-500 text-lg">PLAN DETAILS</h1>
          <h2>
            Premium{" "}
            <span className=" font-medium  border border-gray-400 p-1">
              ULTRA <span className="font-bold">HD</span>
            </span>
          </h2>
          <div></div>
          <p className="text-blue-600 hover:underline cursor-pointer">
            Change plan
          </p>
        </div>
        <div className="flex flex-row justify-between  border-b border-gray-300 p-2">
          <h1 className="text-gray-500 text-lg">SECURITY & PRIVACY</h1>
          <div className="w-[300px]">
            <p>
              Control access to this account, view the most recently active
              devices and more.
            </p>
          </div>
          <div className="flex flex-row space-x-10">
            <div>
              <p className="text-blue-600 hover:underline cursor-pointer">
                Change plan
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-blue-600 hover:underline cursor-pointer">
                Manage access and devices
              </p>
              <p className="text-blue-600 hover:underline cursor-pointer">
                Sign out of all devices
              </p>
              <p className="text-blue-600 hover:underline cursor-pointer">
                Download your personal information
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between border-b border-gray-300 p-2">
          <h1 className="text-gray-500 text-lg">PROFILE & PARENTAL CONTROLS</h1>
          <div className="flex flex-col">
            <div className="flex flex-row space-x-10 justify-between p-2 border-b border-gray-300">
              <div className="flex flex-row space-x-5 items-center">
                <img
                  src="https://nextluxury.com/wp-content/uploads/Homer-Simpson-e1648441168355.jpg"
                  alt=""
                  className="w-12 h-12 rounded-xl"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Yüksel</p>
                  <p>All Maturity Ratings</p>
                </div>
              </div>
              <div className="flex items-center">
                <IoChevronDownOutline size={20} />
              </div>
            </div>
            <div className="flex flex-row space-x-10 justify-between p-2 border-b border-gray-300">
              <div className="flex flex-row space-x-5 items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqiJdk9eigV_PcJoKhZ95OZaLAkQ5YQ9z8bgIRkLp4EkIgZzHmb96nF3dbDqoNKPDv7k&usqp=CAU"
                  alt=""
                  className="w-10 h-12 rounded-xl"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Ahmet</p>
                  <p>All Maturity Ratings</p>
                </div>
              </div>
              <div className="flex items-center">
                <IoChevronDownOutline size={20} />
              </div>
            </div>
            <div className="flex flex-row space-x-10 justify-between p-2 border-b border-gray-300">
              <div className="flex flex-row space-x-5 items-center">
                <img
                  src="https://64.media.tumblr.com/b29d66d276cd8070d29ff53df060ee4d/tumblr_nrwp8j6yzZ1rxw2uko8_1280.jpg"
                  alt=""
                  className="w-12 h-12 rounded-xl"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Ebrar</p>
                  <p>All Maturity Ratings</p>
                </div>
              </div>
              <div className="flex items-center">
                <IoChevronDownOutline size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-[150px] p-2 ">
          <h1 className="text-gray-500 text-lg">SETTINGS</h1>
          <div className="flex flex-col space-y-2">
            <p className="text-blue-600 hover:underline cursor-pointer">
              18+ Content PIN
            </p>{" "}
            <div className="flex items-center space-x-2">
              <p className="text-blue-600 hover:underline cursor-pointer">
                Turn off profile transfers
              </p>
              <MdFiberNew size={24} color="blue" />
            </div>
            <p className="text-blue-600 hover:underline cursor-pointer">
              Test participation
            </p>{" "}
            <p className="text-blue-600 hover:underline cursor-pointer">
              Manage download devices
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccountPage;
