// TODO: button onclick change status
function NavBar() {
    return (
      <nav className="md:h-16 h-12 md:pt-2 bg-slate-900">
        <div 
          className={`
            w-full flex justify-between items-center
            md:text-lg text-md text-white font-bold
          `}
        >
          <button 
            type="button" 
            className="md:px-10 px-6 py-2"
          >
            <h1>Vocab Daily</h1>
          </button>
          <button 
            type="button" 
            className="md:px-10 px-6 py-2"
          >
            <h1>About us</h1>
          </button>
        </div>

      </nav>
    )
  }
  
  export default NavBar;