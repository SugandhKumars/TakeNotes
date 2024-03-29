import React, { useState } from "react";
import NoteCard from "./NoteCard";

const AllNote = ({ data, setData }) => {
  //   const allNotes = JSON.parse(localStorage.getItem("Notes"));
  //   const [localdata, setLocalData] = useState(allNotes);
  console.log(data);
  const filterData = (id) => {
    let filter = data.filter((note) => note.id !== id);
    localStorage.setItem("Notes", JSON.stringify(filter));
    setData(filter);
  };

  return (
    <>
      <div className="   w-[95vw] md:w-[90vw] flex-wrap mx-auto flex justify-evenly  mt-10 relative">
        {data?.map((note) => {
          return (
            <NoteCard
              key={note.id}
              title={note.title}
              note={note.Note}
              id={note.id}
              Delete={filterData}
            />
          );
        })}
      </div>
    </>
  );
};

export default AllNote;
