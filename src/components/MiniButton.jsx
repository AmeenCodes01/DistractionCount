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
      className=" border-b-[8px] border-l-[8px] border-t-slate-100 border-t-8 border-r-[5px] border-r-white   shadow-xl items-center  w-[100%] h-[auto]  flex focus:animate-[pulse_1s] "
      onClick={() => {
        onSelect(name, item);
        setSelected(index);
      }}>
      <p className="text-black border-[0.5px] border-slate-100 w-[100%] h-[100%]   self-center ml-auto mr-auto  items-center justify-center flex text-sm font-mono text-wrap">
        {item}
      </p>
      <MdOutlineDeleteOutline onClick={() => onDelete(name, item)} />
    </button>
  );
}

export default MiniButton;
