import { useState } from "react";
import "./App.css";



function App() {
  
  const [color, setColor]=useState('olive');

  var mainContainer=document.getElementById('mainContainer');
  if(mainContainer){
    mainContainer.style.backgroundColor=color;
  }

  var bgColorChange=(newColor)=>{

    setColor(newColor);
    if(mainContainer){
      mainContainer.style.backgroundColor=newColor;
    } 
    var buttons=document.querySelectorAll('button')
    if(newColor=='black'){
      buttons.forEach((button)=>{
        console.log(button.style)
        button.style.color='white'
      })
      
    }
  
  }
  console.log(color);
  return (
  <div className="w-full h-screen duration-200" id="mainContainer">
    <button className="m-4" onClick={()=>bgColorChange('red')}>RED</button>
    <button className="m-4" onClick={()=>bgColorChange('black')}>black</button>
    <button className="m-4" onClick={()=>bgColorChange('pink')}>pink</button>
    <button className="m-4" onClick={()=>bgColorChange('violet')}>violet</button>
    <button className="m-4" onClick={()=>bgColorChange('magenta')}>magenta</button>
    <button className="m-4" onClick={()=>bgColorChange('indigo')}>indigo</button>


  </div>
  
  );
}

export default App;


