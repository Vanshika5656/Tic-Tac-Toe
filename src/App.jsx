import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mark,setMark]=useState([null,null,null,null,null,null,null,null,null]);
  const [isX,setIsX]=useState(true);
  const [winner,setWinner]=useState("No Winner");
  function checkWinner(arr){
    let winnerPos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let res="draw";
    winnerPos.forEach((wp)=>{
        let a=wp[0];
        let b=wp[1];
        let c=wp[2];
        if(arr[a] && arr[a]==arr[b] && arr[a]==arr[c]){
            res=arr[a];
        }
    });
    setWinner(res);
}

  function clickHandler(indx){
    let newMark=[...mark];
    // if(isX==true){
    //   newMark[indx]='X';
    //   setMark(newMark);
    //   setIsX(false);
    // }
    // else{
    //   newMark[indx]='O';
    //   setMark(newMark);
    //   setIsX(true);
    // }
    if(mark[indx==null]){
      newMark[indx]=isX? 'x' : 'O';
      setIsX(!isX);
      setMark(newMark);
      checkWinner(newMark);
    }
    
    
   
    
  }
  return (
    <>
    <div>
      <button onClick={()=>clickHandler(0)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[0]}</button>
      <button onClick={()=>clickHandler(1)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[1]}</button> 
      <button onClick={()=>clickHandler(2)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[2]}</button> 
    </div>
    <div>
      <button onClick={()=>clickHandler(3)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[3]}</button> 
      <button onClick={()=>clickHandler(4)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[4]}</button> 
      <button onClick={()=>clickHandler(5)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[5]}</button> 
    </div>
    <div>
      <button onClick={()=>clickHandler(6)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[6]}</button> 
      <button onClick={()=>clickHandler(7)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[7]}</button> 
      <button onClick={()=>clickHandler(8)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[8]}</button> 
    </div>
    <h1>winner: {winner}</h1>
    </>
  )
}

export default App
