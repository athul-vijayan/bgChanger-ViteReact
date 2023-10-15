import { useState } from "react";
import "./App.css";

function App() {
  var mainContainer = document.getElementById("mainContainer");
  const [color, setColor] = useState("");

  var bgColorChange = (newColor) => {
    setColor(newColor);
    if (mainContainer) {
      mainContainer.style.backgroundColor = newColor;
    }
  };

  var btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.innerHTML = btn.innerHTML.toUpperCase();
  });

  console.log(color);
  return (
    <div
      className="w-full h-screen duration-200 text-center"
      id="mainContainer"
    >
      <div className="justify-center m-auto">
        <button
          style={{ backgroundColor: "olive" }}
          className="m-4 outline-none    text-white bg-violet-500  px-8 rounded-2xl p-4"
          onClick={() => bgColorChange("olive")}
        >
          olive
        </button>
        <button
          style={{ backgroundColor: "black" }}
          className="m-4 px-8 rounded-2xl p-4 bg-violet-500 text-white"
          onClick={() => bgColorChange("black")}
        >
          black
        </button>
        <button
          style={{ backgroundColor: "pink" }}
          className="m-4 px-8 rounded-2xl p-4 text-white bg-violet-500"
          onClick={() => bgColorChange("pink")}
        >
          pink
        </button>
        <button
          style={{ backgroundColor: "violet" }}
          className="m-4 px-8 rounded-2xl p-4 text-white bg-violet-500"
          onClick={() => bgColorChange("violet")}
        >
          violet
        </button>
        <button
          style={{ backgroundColor: "magenta" }}
          className="m-4 px-8 rounded-2xl p-4 text-white bg-violet-500"
          onClick={() => bgColorChange("magenta")}
        >
          magenta
        </button>
        <button
          style={{ backgroundColor: "indigo" }}
          className="m-4 px-8 rounded-2xl p-4 text-white bg-violet-500"
          onClick={() => bgColorChange("indigo")}
        >
          indigo
        </button>
        <button
          style={{ backgroundColor: "lavender" }}
          className="m-4 px-8 rounded-2xl p-4 text-white bg-violet-500"
          onClick={() => bgColorChange("lavender")}
        >
          lavender
        </button>
      </div>
    </div>
  );
}

export default App;
