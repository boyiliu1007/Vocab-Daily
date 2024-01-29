// TODO: button onclick change status
function NavBar() {
    return (
      <nav className="z-1000 w-[100%] h-[8vh] flex justify-between items-center bg-slate-900 shadow-xl">
        <div className="bg-slate-900 w-1/4 h-full flex justify-start pl-[5%]">
          <button type="button" className="flex items-center justify-center font-bold ">
            <h1 className="text-white text-[2vw]">Vocab Daily</h1>
          </button>
        </div>
        <div className="bg-slate-900 w-1/6 h-full flex justify-end pr-[5%]">
          <button type="button" className="flex items-center justify-center font-bold ">
            <h1 className="text-white text-[1.5vw]">About us</h1>
          </button>
        </div>
      </nav>
    )
  }
  
  export default NavBar;