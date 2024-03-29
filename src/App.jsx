import AllNote from "./Components/AllNote";
import InputBar from "./Components/InputBar";

function App() {
  return (
    <>
      <div className=" bg-blue-300  md:bg-blue-300 flex justify-center py-2 mb-10 shadow-lg">
        <p className="text-xl md:text-2xl font-semibold">Notes</p>
      </div>
      <InputBar />
    </>
  );
}

export default App;
