import { PlayIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
interface ButtonProps {
  icon: string;
  children: string;
  style: string;
}

function Button({ icon, children, style }: ButtonProps) {
  return (
    <div className={`p-2 cursor-pointer rounded-lg ${style}`}>
      <div className="flex flex-row space-x-3 items-center">
        {icon === "info" && <InformationCircleIcon className="w-6 h-6" />}
        {icon === "play" && <PlayIcon className="w-6 h-6" />}
        <h1>{children}</h1>
      </div>
    </div>
  );
}

export default Button;
