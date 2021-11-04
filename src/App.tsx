import React, { useCallback, useState } from 'react';
import './App.css';
import MissionList from './components/Mission';
import MissionInfo from './components/MissionInfo';

function App() {
  const [id, setId] = useState(25);
  const handleIdChange = useCallback(newId =>{
    setId(newId)
  },[])
  return (
    <div className="mainDiv">
      <MissionList handleIdChange={handleIdChange}/>
      <MissionInfo id={id}/>
    </div>
  );
}

export default App;
