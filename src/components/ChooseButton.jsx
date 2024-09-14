import React, {useEffect, useState} from "react";
import MiniButton from "./MiniButton";

function ChooseButton({
  data,
  value,
  onChange,
  onClick,
  onSelect,
  name,
  added,
  onDelete,
}) {
  const [selectedIndex, setSelectedIndex] = useState();
  useEffect(() => {
    const checkAdded = () => (added ? setSelectedIndex() : null);
    checkAdded();
  }, [added]);

  return (
    <div
      className="grid grid-cols-3 grid-rows-3 grid-flow-dense gap-2 border-2 p-4 "
      key={name}>
      {data
        ? data?.map((item, index) => (
            <MiniButton
              item={item}
              onSelect={onSelect}
              name={name}
              setSelected={setSelectedIndex}
              selected={selectedIndex}
              index={index}
              onDelete={onDelete}
            />
          ))
        : null}
      <div className="border-2 flex">
        <input
          type="text"
          className=" w-[100%] focus:outline-none px-2 flex"
          value={value}
          onChange={onChange}
        />
        <button
          className=" shadow-inner p-[2px] bg-gray-100  self-center h-[100%] "
          onClick={onClick}>
          +
        </button>
      </div>
    </div>
  );
}

export default ChooseButton;
