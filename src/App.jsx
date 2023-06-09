import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [cardleft,setCardleft]=useState(5);
  const [cstate,setcstate]=useState("Click to start the game");
  const [ndefuse,setNdefuse]=useState(0);
  const [mystyle,setStyle]=useState({});
  const myarray=["cat 😺","bomb 💣","defuse 🙅‍♂️","shuffle 🔀"];
  function myfunc(){
    setcstate(myarray[ Math.floor(Math.random()*4)]);
    setCardleft(cardleft-1);
    setStyle({cursor: 'default', pointerEvents: 'none', textDecoration: 'none', color: 'inherit'});
  }
  useEffect(()=>{
    
    setTimeout(()=>{
      if(cstate==="bomb 💣" ){
        if(!ndefuse)
        {
          setcstate("You loose click to play again");
          console.log("you choose bomb");
          setCardleft(5);
          setNdefuse(0);
        }
        else{
          setNdefuse(ndefuse-1);
          console.log("bomb defused ");
          console.log(`number of defuses left : ${ndefuse-1}`);
        }
      }
      else if(cstate==="defuse 🙅‍♂️"){
        setNdefuse(ndefuse+1);
        console.log(`number of defuses left : ${ndefuse+1}`);
      }
      if(cstate==="shuffle 🔀"){
        console.log("you choose shuffle");
        setCardleft(5);
      }
      if(cardleft===0 && cstate!=="shuffle 🔀" && cstate!=='bomb 💣')
      {
        setcstate("You Won Click to play again");
        console.log("you won");
        setCardleft(5);
        setNdefuse(0);
      }
      setStyle({});
    },1000);
    
  },[cstate,cardleft]);
 
  return (
    <>
    <h1> Number of cards left : {cardleft}</h1>
    <h3>{cstate}</h3>
    <button onClick={myfunc}  style={mystyle}>Click</button>
    </>
  )
}

export default App