// import { h1 } from "doker/lib/mixins/formatting";
import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const NoteCard = ({ title, note, id, Delete }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newNote, setNewNote] = useState(note);
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(true);
  };
  let localData = JSON.parse(localStorage.getItem("Notes"));
  const handleHide = () => {
    localData.map((note) => {
      if (note.id === id) {
        note.title = newTitle;
        note.Note = newNote;
      }
    });
    localStorage.setItem("Notes", JSON.stringify(localData));
    setIsEdit(false);
    console.log(id);
  };
  return (
    <>
      {isEdit ? (
        <div className="absolute w-full h-full  bg-zinc-100 bg-opacity-25 z-10 ">
          <div className=" w-[70vw] md:w-[50vw] shadow-lg   rounded-xl p-2 md:p-4 mx-auto mt-10  bg-white  ">
            <div className="flex flex-col md:gap-2">
              <input
                value={newTitle}
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
                type="text"
                placeholder="Title"
                className="   h-[90%] md:py-2 outline-none"
              />
              <textarea
                type="text"
                value={newNote}
                onChange={(e) => {
                  setNewNote(e.target.value);
                }}
                placeholder="Add a Note..."
                className="  h-[90%] py-1 md:py-2 outline-none"
              />
            </div>
            <div className="flex justify-end md:mt-2">
              {/* <input type="Color" /> */}
              <button
                onClick={handleHide}
                className="hover:bg-zinc-200 px-3 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="w-[45%] md:w-[23%] md:mr-6 mb-4 md:mb-8  shadow-xl rounded-lg  "
          onClick={handleEdit}
        >
          <div className="break-words ">
            <p className="text-base leading-0 font-semibold md:text-2xl p-1 md:p-2 ">
              {newTitle}
            </p>
            <p className="text-xs leading-0 md:text-base p-1 md:p-2">
              {newNote}
            </p>
          </div>
          <div className="flex justify-end">
            <MdOutlineDelete
              className={`text-3xl  md:text-4xl  md:m-2 hover:bg-zinc-200  transition-all cursor-pointer  rounded-full p-2`}
              onClick={() => Delete(id)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NoteCard;
