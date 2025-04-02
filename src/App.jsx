import './App.css'
import Header from './Compponents/Header/Header'
import Vlogs from './Compponents/Vlogs/Vlogs'
import Bookmarked from './Compponents/Bookmarked/Bookmarked'
import { useState } from 'react'

function App() {
  //create useState for hendleBookMark btn 
  const [vlogs, setVlogs] = useState([])
  

  //for read time that state
  const [times, setTimes ] = useState(0)
 

  // hendle vlog mark btn
  const hendleBookMark = (vlog) => {
    const newVlogs = [...vlogs, vlog]
    setVlogs(newVlogs)
  };


  //hendle read time 
  const hendleReadTime = (time) => {
    setTimes(times + time)
    const reminemarke = vlogs.filter(vlog => vlog.id !== time)
    setVlogs(reminemarke)
    
  };
  
  return (
    <>
     <div>
      <Header></Header>
      <hr className='mt-2'/>
      <div className='flex  justify-center mt-[50px] gap-5'>
       <Vlogs 
       hendleBookMark={hendleBookMark}
       hendleReadTime={hendleReadTime}
       ></Vlogs> 
       
        <Bookmarked vlogs={vlogs} times={times} ></Bookmarked> 
      </div>
     </div>
    </>
  )
}

export default App
