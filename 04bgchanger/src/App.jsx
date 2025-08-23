// ✅ React ka useState import kar rahe hain, state manage karne ke liye
import { useState } from "react";

function App() {
  // ✅ color ek state variable hai (initial value = "olive")
  // setColor ek function hai jo color ko update karega
  const [color, setColor] = useState("olive");

  return (
    // ✅ Main container div
    // Tailwind classes: full width, full height (screen), transition effect (duration-150)
    // Inline style: backgroundColor ko state ke color se set kiya gaya hai
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    > 
      {/* Heading text */}
      <h1
  className={`text-opacity-100 text-center text-wrap text-2xl ${
    color === "black" ? "text-white" : "text-black"
  }`}
>
  Hii EveryOne This is background Changer Made By Pankaj Singh !!!!
  Please Click on a button to Change the Background
</h1>


      {/* ✅ Buttons ko bottom par fix kiya hai (fixed position) */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {/* ✅ Buttons ko ek white box ke andar rakha hai with shadow, padding aur rounded shape */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          {/* ✅ Har button ek color change karega (setColor se) */}
          {/* Button red background with white text */}
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 bg-red-500 rounded-full text-white shadow-lg"
          >
            Red
          </button>

          {/* Green button */}
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 bg-green-500 rounded-full text-white shadow-lg"
          >
            Green
          </button>

          {/* Blue button */}
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 bg-blue-500 rounded-full text-white shadow-lg"
          >
            Blue
          </button>

          {/* Olive button (custom hex code use kiya) */}
          <button
            onClick={() => setColor("#808000")}
            className="outline-none px-4 py-1 bg-[#808000] rounded-full text-white shadow-lg"
          >
            Olive
          </button>

          {/* Grey button */}
          <button
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 bg-gray-500 rounded-full text-white shadow-lg"
          >
            Grey
          </button>

          {/* Yellow button */}
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 bg-yellow-500 rounded-full text-white shadow-lg"
          >
            Yellow
          </button>

          {/* Pink button */}
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 bg-pink-500 rounded-full text-white shadow-lg"
          >
            Pink
          </button>

          {/* Purple button */}
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 bg-purple-500 rounded-full text-white shadow-lg"
          >
            Purple
          </button>

          {/* Lavender button (custom hex color #E6E6FA) */}
          <button
            onClick={() => setColor("#E6E6FA")}
            className="outline-none px-4 py-1 bg-[#E6E6FA] rounded-full text-white shadow-lg"
          >
            Lavender
          </button>

          {/* White button (text black kiya taaki visible ho) */}
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 bg-white rounded-full text-black shadow-lg"
          >
            White
          </button>

          {/* Black button */}
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 bg-black rounded-full text-white shadow-lg"
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

// ✅ Component export kar rahe hain taki index.js/App.jsx me use ho sake
export default App;
