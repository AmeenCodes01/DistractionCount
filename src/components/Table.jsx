import React from "react";
import {MdOutlineDeleteOutline} from "react-icons/md";

const headers = ["reason", "urge", "count"];

const rowStyle = "font-mono italic font-light";
function Table({data, onDelDistraction}) {
  return (
    <table className="table-auto w-[100%] self-start items-start justify-start    ">
      <thead className=" w-[100%] text-slate-300">
        <tr className=" text-slate-300">
          {headers.map((header) => (
            <th className=" font-serif" key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length !== 0
          ? data.map((dist) => {
              return (
                <tr className="text-center">
                  <td className={rowStyle} key={dist?.reason}>
                    {dist?.reason}
                  </td>
                  <td className={rowStyle} key={dist?.reason}>
                    {dist?.urge}
                  </td>
                  <td className={rowStyle} key={dist?.count}>
                    {dist?.count}
                  </td>

                  <MdOutlineDeleteOutline
                    onClick={() => onDelDistraction(dist.id)}
                  />
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}

export default Table;
