import './App.css'
import Header from './Compponents/Header/Header'
import Vlogs from './Compponents/Vlogs/Vlogs'
import Bookmarked from './Compponents/Bookmarked/Bookmarked'
import { useState } from 'react'

function App() {
  //create useState for hendleBookMark btn 
  const [vlogs, setVlogs] = useState([])

  // hendle vlog mark btn
  const hendleBookMark = (vlog) => {
    const newVlogs = [...vlogs, vlog]
    setVlogs(newVlogs)
    
  };
  
  return (
    <>
     <div>
      <Header></Header>
      <hr className='mt-2'/>
      <div className='flex  justify-center mt-[50px] gap-5'>
       <Vlogs hendleBookMark={hendleBookMark}></Vlogs> 
        <Bookmarked vlogs={vlogs}></Bookmarked> 
      </div>
     </div>
    </>
  )
}

export default App
