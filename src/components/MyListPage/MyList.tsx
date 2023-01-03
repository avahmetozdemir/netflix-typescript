import React, { useState } from "react";

function MyList() {
  const [list, setList] = useState(null);
  return (
    <div className=" p-4">
      <h1 className="text-white">My List</h1>
      {/* movies */}
      {!list && (
        <p className="text-center text-[#4F4C46] mt-40">
          You haven't added any titles to your list yet.
        </p>
      )}
    </div>
  );
}

export default MyList;
