import NavBar from "./components/NavBar";

function App() {
  
  return(
    <>
      <NavBar/>
      <div 
        className={`
          mx-auto md:max-w-[900px] w-full
          bg-white h-screen flex justify-center
        `}
      >
          <div className='pt-8'>
            <h1>Choose the correct answer to fill in:</h1>
            <h1>This line is question</h1>
          </div>
      </div>
    </>
  )
}

export default App;
