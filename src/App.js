import {useState, useEffect} from "react";
import "./App.css";

import Button from "./components/Button";
import ChooseButton from "./components/ChooseButton";
import Table from "./components/Table";

function App() {
  const [urges, setUrges] = useState(
    JSON.parse(localStorage.getItem("urges")) || [
      "youtube",
      "reddit",
      "instagram",
      "S",
      "game",
      "eat",
      "music",
      "discord",
    ]
  );

  const [reasons, setReasons] = useState(
    JSON.parse(localStorage.getItem("reasons")) || [
      "stuck",
      "bored",
      "lost interest",
      "tired",
    ]
  );

  const [urge, setUrge] = useState("");
  const [reason, setReason] = useState("");
  const [added, setAdded] = useState(false);

  const [distraction, setDistraction] = useState(null);
  const [distractions, setDistractions] = useState(
    JSON.parse(localStorage.getItem("distractions")) || []
  );

  const onAddUrge = () => {
    setUrges((prev) => (urge.trim() !== "" ? [...prev, urge] : prev));
    setUrge("");
  };

  const onAddReason = () => {
    console.log(reason);
    setReasons((prev) => (reason.trim() !== "" ? [...prev, reason] : prev));
    setReason("");
  };

  const onAddDistraction = () => {
    if (distraction !== null && distraction.urge && distraction.reason) {
      setDistractions((prev) => {
        // Find the existing distraction with the same reason and urge
        let existingDistraction;
        if (prev.length !== 0) {
          existingDistraction = prev.find(
            (dist) =>
              dist?.reason === distraction?.reason &&
              dist.urge === distraction.urge
          );
        }
        let newDistractions;
        if (existingDistraction) {
          // If the distraction exists, increase its count
          newDistractions = prev.map((dist) =>
            dist === existingDistraction
              ? {...dist, count: dist.count + 1}
              : dist
          );
        } else {
          // If the distraction does not exist, add it with count 1
          const id = prev.length !== 0 ? prev[prev.length - 1].id + 1 : 1;
          newDistractions = [...prev, {...distraction, count: 1, id}];
        }

        return newDistractions;
      });

      setDistraction();
      setAdded(true);
    }
  };
  const onSelect = (name, item) => {
    setAdded(false);

    setDistraction({...distraction, [name]: item});
  };

  const onDelDistraction = (id) => {
    setDistractions((prev) => {
      return prev.reduce((acc, dist) => {
        if (dist?.id === id) {
          if (dist.count > 1) {
            acc.push({...dist, count: dist.count - 1});
          }
          // If count is 1, do not add it to the accumulator (effectively deleting it)
        } else {
          acc.push(dist);
        }
        return acc;
      }, []);
    });
  };

  const onDelete = (title, value) => {
    if (title == "urge") {
      setUrges((prev) => {
        const newLabels = prev.filter((dist) => dist !== value);
        return newLabels;
      });
    } else if (title == "reason") {
      setReasons((prev) => {
        const newLabels = prev.filter((dist) => dist !== value);
        return newLabels;
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("reasons", JSON.stringify(reasons));
  }, [reasons]);
  useEffect(() => {
    localStorage.setItem("urges", JSON.stringify(urges));
  }, [urges]);
  useEffect(() => {
    localStorage.setItem("distractions", JSON.stringify(distractions));
  }, [distractions]);

  return (
    <div className="  flex-col   flex h-[100vh] w-[100vw] p-[100px] mb-3 items-center gap-6 bg-slate-950 text-white  ">
      {/* 3 buttons ? */}
      <div className="flex-col flex lg:flex-row items-center gap-10 flex-1 ">
        <div>
          <p className="mb-2 font-semibold italic">reason</p>
          <ChooseButton
            value={reason}
            data={reasons}
            onChange={(e) => setReason(e.target.value)}
            onClick={onAddReason}
            onSelect={onSelect}
            name="reason"
            added={added}
            onDelete={onDelete}
          />
        </div>
        <div>
          <p className="mb-2 font-semibold italic">urge</p>
          <ChooseButton
            value={urge}
            data={urges}
            onChange={(e) => setUrge(e.target.value)}
            onClick={onAddUrge}
            onSelect={onSelect}
            added={added}
            name="urge"
            onDelete={onDelete}
          />
        </div>
        <Button text="Distracted" onClick={onAddDistraction} />
      </div>
      <div
        className="flex-1 w-[90vw]  sm:w-[50%] h-[100%] mb-[20px]  items-start justify-center sm:justify-items-start flex border-4 border-dashed p-2 border-slate-300
        sm:self-end sm:justify-end 
       ">
        <Table data={distractions} onDelDistraction={onDelDistraction} />
      </div>

      {/*       
      <Button text="Why" /> <Button text="Urge" /> */}
    </div>
  );
}

export default App;
