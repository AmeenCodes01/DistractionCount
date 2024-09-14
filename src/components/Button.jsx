import React from "react";

function Button({text, onClick}) {
  return (
    <div>
      <button
        className=" border-b-[20px] border-l-[20px] border-t-slate-100 border-t-8 border-r-[10px] border-r-white   shadow-xl  w-[300px] h-[100px]  flex focus:animate-[pulse_1s]  "
        onClick={onClick}>
        <p className="text-black border-[0.5px] border-slate-100 w-[100%] h-[100%]   self-center ml-auto mr-auto  items-center justify-center flex text-2xl font-mono ">
          {text}
        </p>
      </button>
    </div>
  );
}

export default Button;
