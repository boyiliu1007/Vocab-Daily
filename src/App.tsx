import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import NavBar from "./components/NavBar";

function App() {
  
  return(
    <div>
      <NavBar/>
      <div className="h-[92vh] w-full flex justify-center">
        <div className="h-full w-[75%] px-[5%] bg-slate-200 flex flex-col">
          <div className="h-auto w-full mb-[2%] mt-[7%]">
            <h1 className="introColor font-bold text-[4vh]">Choose the correct answer to fill in:</h1>
          </div>
          <div className="h-auto w-full mb-[2%]">
            <h1 className="text-black font-bold text-[3vh]">This line is question</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
