import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function WorkExp() {
  const [list, setList] = useState([]);
  function handleClick() {
    console.log(list);
    appendElementToList({ id: uuidv4() });
  }
  function appendElementToList(newElement) {
    setList((prevList) => [...prevList, newElement]);
  }

  function removeFromList(id) {
    setList(
      list.filter((list) => {
        return list.id !== id;
      })
    );
  }

  return (
    <>
      <div>
        <div className="flex w-full items-center gap-2">
          <div className="bg-white h-[1px] grow"></div>
          <button className="btn btn-circle border btn-sm border-white" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>

          <div className="text-black bg-base-200 py-1 px-3 rounded-full border border-white">Work Experience</div>
          <div className="bg-white h-[1px] grow"></div>
        </div>
      </div>

      {list.map((WorkExp) => (
        <div className="collapse collapse-arrow	bg-base-200 border border-white shrink-0" key={WorkExp.id}>
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Work Exp</div>
          <div className="collapse-content">
            <div className="flex flex-col gap-3">
              <input type="text" placeholder="Company" className="input input-bordered input-primary w-full max-w-xs " />
              <input type="text" placeholder="Role" className="input input-bordered input-primary w-full max-w-xs " />
              <input type="text" placeholder="From" className="input input-bordered input-primary w-full max-w-xs " />
              <input type="text" placeholder="To" className="input input-bordered input-primary w-full max-w-xs " />
              <input type="text" placeholder="Tasks" className="input input-bordered input-primary w-full max-w-xs " />

              <button
                className="btn btn-error"
                onClick={() => {
                  removeFromList(WorkExp.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default WorkExp;
