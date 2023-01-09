import { BsPencil } from "react-icons/bs";

interface UserProps {
  name: string;
  imgUrl: string;
  manageProfile: boolean;
  manage?: boolean;
}

function UserLogin({ name, imgUrl, manageProfile, manage }: UserProps) {
  return (
    <div className="w-[150px] cursor-pointer m-3 ">
      {!manageProfile ? (
        <img
          src={imgUrl}
          alt={name}
          className={`w-[150px] h-[150px] mb-3 rounded-xl border-4 border-[#181512] hover:border-white`}
        />
      ) : (
        <div className="relative">
          <div className="absolute flex bg-black/40 w-full h-[150px] rounded-lg">
            {manage && (
              <div className="flex flex-1 justify-center items-center">
                <BsPencil size={40} color="white" />
              </div>
            )}
          </div>
          <img
            src={imgUrl}
            alt={name}
            className={`w-[150px] h-[150px] mb-3 rounded-xl border-4 border-[#181512] hover:border-white  `}
          />
        </div>
      )}
      <p className="text-white text-center text-lg">{name}</p>
    </div>
  );
}

export default UserLogin;
