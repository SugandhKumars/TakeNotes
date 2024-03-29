import React, { useState, useEffect } from "react";
import AllNote from "./AllNote";

const InputBar = () => {
  const initialData = JSON.parse(localStorage.getItem("Notes"));
  const [showDetails, setShowDetails] = useState(false);
  const [title, setTitle] = useState("");
  const [Note, setNote] = useState("");
  const [data, setData] = useState(initialData);
  const handleCLick = () => {
    setShowDetails(true);
  };

  const handleHide = () => {
    setShowDetails(false);
    if (title.trim().length > 0 || Note.trim().length > 0) {
      setData([...data, { title, Note, id: Math.random() }]);
      setNote("");
      setTitle("");
    }
  };

  useEffect(() => {
    let copyData = [...data];
    console.log(copyData);
    localStorage.setItem("Notes", JSON.stringify(copyData));
  }, [data]);

  return (
    <div>
      {showDetails ? (
        <div className="w-[70vw] md:w-[70vw] shadow-lg rounded-xl p-2  md:p-4 mx-auto mt-2">
          <div className="flex flex-col md:gap-2">
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Title"
              className=" text-base md:text-base py-1  md:h-[90%] md:py-2 outline-none"
            />
            <textarea
              type="text"
              value={Note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
              placeholder="Add a Note..."
              className="text-sm md:text-base md:h-[90%] md:py-2 outline-none"
            />
          </div>
          <div className="flex justify-end mt-1 md:mt-2">
            <button
              onClick={handleHide}
              className="hover:bg-red-300 md:hover:bg-zinc-200 px-3 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-2">
          <input
            onClick={handleCLick}
            type="text"
            placeholder="Add a Note..."
            className="w-[70vw] shadow-lg rounded-lg   p-2 "
          />
        </div>
      )}
      <AllNote data={data} setData={setData} />
    </div>
  );
};

export default InputBar;
