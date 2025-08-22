import React from "react";

function Card({username , btnText = "Default Button Text"}){
   //console.log("props",props);
   //destructuring (props.username)= {username}
   //destructuring (props.btnText) = {btnText} and set default value if not pass prop it will so default
    return(
            <div className="max-w-xs p-6 rounded-md shadow-md bg-black ">
        <img
          src="https://images.unsplash.com/photo-1755001244508-58fcc65797ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {btnText}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}

export default Card;
