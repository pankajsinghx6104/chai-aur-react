//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  let myObj = {
    username: "pankaj",
    age: 21
  }
  //let myArray = [1, 2, 3, 4, 5]

   return (
    <>
    <h1 className="bg-red-400 text-3xl font-bold underline mb-6">
      Hello world!!!!
    </h1>
    <Card username = "chaiaurcode"someObj={myObj} btnText="learn more"/>
    <Card username = "pankaj"btnText="Click me"/>
    <Card username = "Kuldeep" btnText="Visit"/>
    </>
  )
}

export default App
