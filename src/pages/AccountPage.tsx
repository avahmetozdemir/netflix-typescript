import React from "react";
import Navbar from "../components/UI/Navbar";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
function AccountPage() {
  return (
    <div>
      <Navbar />
      <div className="w-[1000px] mx-auto">
        <div className="flex border-b border-gray-500 space-x-3 items-center pb-5">
          <h1 className="text-4xl">Account</h1>
          <MdOutlineVideoLibrary color="red" />
          <h3 className=" text-gray-600">
            Member Since <span>March 2020</span>
          </h3>
        </div>
        <div className="flex justify-between mt-2">
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
        <div className="flex flex-row border-b border-gray-300">
          <h1>PLAN DETAILS</h1>
          <h2>Premium ULTRA HD</h2>
          <p className="text-blue-600 hover:underline cursor-pointer">
            Change plan
          </p>
        </div>
        <div className="flex flex-row border-b border-gray-300">
          <h1>SECURITY & PRIVACY</h1>
          <p>
            Control access to this account, view the most recently active
            devices and more.
          </p>
          <p className="text-blue-600 hover:underline cursor-pointer">
            Change plan
          </p>
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
        <div className="flex flex-row border-b border-gray-300">
          <h1>PROFILE & PARENTAL CONTROLS</h1>
          <div>
            <div>
              <div>
                <img src="" alt="" />
                <div>
                  <p>Yüksel</p>
                  <p>All Maturity Ratings</p>
                </div>
              </div>
              <IoChevronDownOutline size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
