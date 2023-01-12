import React from "react";
import { BiChevronRight } from "react-icons/bi";

function Main() {
  return (
    <div className="px-[400px] py-8">
      <div className="flex ">
        <div className="flex flex-col space-y-2">
          <h1>Manage My Account</h1>
          <div className="flex flex-col space-y-2">
            <p>Plans and Pricing</p>
            <p>
              I received an email stating there was a new sign-in to my account
            </p>
            <p>How to change your plan</p>
          </div>
        </div>
        <div>
          <h1>Can't Watch</h1>
          <div>
            <p>How to change your Netflix password</p>
            <p>Netflix says to sign up when trying to sign in</p>
            <p>Netflix says 'This app is not compatible with your device.'</p>
          </div>
        </div>
        <div>
          <h1>Quick Links</h1>
          <div>
            <div className="flex justify-between">
              <p>Request TV shows or movies</p>
              <BiChevronRight color="red" size={24} />
            </div>
            <div className="flex justify-between">
              <p>Update email</p>
              <BiChevronRight color="red" size={24} />
            </div>
            <div className="flex justify-between">
              <p>Update password</p>
              <BiChevronRight color="red" size={24} />
            </div>
            <div className="flex justify-between">
              <p>Update payment method</p>
              <BiChevronRight color="red" size={24} />
            </div>
            <div className="flex justify-between">
              <p>Cancel account</p>
              <BiChevronRight color="red" size={24} />
            </div>
            <div className="flex justify-between">
              <p>Review paymeny history</p>
              <BiChevronRight color="red" size={24} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Billing Questions</h1>
          <div>
            <p>How to pay for Netflix</p>
            <p>Billing and Payments</p>
            <p>Netflix Gift Cards</p>
          </div>
        </div>
        <div>
          <h1>Watching Netflix</h1>
          <div>
            <p>How to create, change, or delete profiles</p>
            <p>How to watch Netflix on your TV</p>
            <p>How to download titles to watch offline</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
