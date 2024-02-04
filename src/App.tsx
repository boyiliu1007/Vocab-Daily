import NavBar from "./components/NavBar";
import Option from "./components/Option";
import { useState, useEffect } from 'react';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const answerIndex = 0

  const handleIndexChange = (newIndex :number) =>{
    setSelectedIndex(newIndex)
  }
  useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);

  const handleIsSubmitted = () =>{
    setIsSubmitted(true)
  }
  
  const renderOptions = () =>{
    const components: JSX.Element[] = [];
    for(let i = 0; i < 4; i++){
      components.push(
        <Option 
          onIndexChange={handleIndexChange} 
          optionNum = {i} 
          answer = {answerIndex}
          selected = {selectedIndex === i} 
          submitted = {false}
        />
      )
    }
    return components
  }
  
  return(
    <>
      <NavBar />
      <div 
        className={`
          mx-auto md:max-w-[900px] w-full 
          bg-white flex flex-col items-center h-screen
        `}
      >
          <div className='pt-8'>
            <h1>Choose the correct answer to fill in:</h1>
            <h1>This line is question</h1>
          </div>
          {renderOptions()}
          {
            isSubmitted? null: 
            <button className = "h-10 w-20 mt-3 themeColor rounded-xl" onClick = {handleIsSubmitted}>
              <h1 className="text-white">submit</h1>
            </button>
          }
      </div>
    </>
  )
}

export default App;
