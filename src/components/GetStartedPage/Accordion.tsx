import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

interface AccordionProps {
  key: number;
  title: string;
  information: string;
}

function Accordion({ key, title, information }: AccordionProps) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="bg-gray-700 max-w-[700px]">
      <header className="flex justify-between px-4 py-2 w-[700px]">
        <h1 className="text-2xl">{title}</h1>
        <button onClick={() => setShowInfo(!showInfo)}>
          {!showInfo ? <AiOutlinePlus /> : <AiOutlineClose />}
        </button>
      </header>
      {showInfo && <p className="p-2">{information}</p>}
    </article>
  );
}

export default Accordion;
