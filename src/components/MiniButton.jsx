import React from "react";
import {MdOutlineDeleteOutline} from "react-icons/md";

function MiniButton({
  onSelect,
  name,
  item,
  index,
  setSelected,
  selected,
  onDelete,
}) {
  return (
    <button
      key={index}
      style={{
        opacity: selected === index ? "0.5" : "100",
      }}
      className=" 
      border-b-[8px]
              border-t-slate-700

       border-l-[8px]
                border-r-slate-800
        border-t-8
                 border-b-slate-800 

        border-r-[5px]

           border-l-slate-700 
         
         
         
         
         
         shadow-xl items-center  w-[100%] h-[auto]  flex focus:animate-[pulse_1s] "
      onClick={() => {
        onSelect(name, item);
        setSelected(index);
      }}>
      <p className="text-slate-300 border-[0.5px] border-slate-500 w-[100%] h-[100%]   self-center ml-auto mr-auto  items-center justify-center flex text-sm font-mono text-wrap">
        {item}
      </p>
      <MdOutlineDeleteOutline onClick={() => onDelete(name, item)} />
    </button>
  );
}

export default MiniButton;
