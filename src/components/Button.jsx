import React from "react";

function Button({text, onClick}) {
  return (
    <div>
      <button
        className=" 
        border-b-[20px]
        border-b-slate-700

         border-l-[20px]
                border-l-slate-800

         border-t-slate-800 
          border-t-8
        
          border-r-[10px]
           border-r-slate-700 





              shadow-xl  w-[300px] h-[100px]  flex focus:animate-[pulse_1s]  "
        onClick={onClick}>
        <p className=" border-[0.5px] border-slate-500 w-[100%] h-[100%]   self-center ml-auto mr-auto  items-center justify-center flex text-2xl font-mono text-slate-300">
          {text}
        </p>
      </button>
    </div>
  );
}

export default Button;
