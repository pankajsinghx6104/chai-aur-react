import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  //let [counter(variable), setCounter(method)] = useState(0)(default state)

  //let counter = 15

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
      console.log('Counter value:', counter + 1)
    }
  }
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
      console.log('Counter value:', counter-1)
    }
  }
  return (
    <>
     <h1>CHai aur React | Pankaj </h1>
     <h2>Counter value: {counter}</h2>

     <button 
     onClick={addValue}>Add value: {counter}</button>
     <br />
     <button onClick={removeValue}>remove value: {counter}</button>
     <p>footer: {counter}</p>

    </>
  )
}

export default App


// read Virtual DOM, fibre and reconciliation from https://github.com/acdlite/react-fiber-architecture and chat gpt
/**
 * 🌱 React Core Internals (Summary)
1️⃣ Virtual DOM

A lightweight copy of the real DOM kept in memory.

When state/props change → React builds a new Virtual DOM → compares it with the old one (diffing) → applies only the necessary changes to the real DOM.

✅ Makes UI updates faster because direct DOM operations are expensive.

2️⃣ React Fiber (React 16+)

Fiber is React’s new reconciliation engine.

Before Fiber (old React), updates were synchronous → large updates could block the UI.

Fiber introduced:

Incremental rendering → breaks work into small units (“fibers”).

Prioritization → urgent updates (like typing) are processed before less important ones (like animations).

Pausing & resuming work → keeps the UI responsive.

3️⃣ Reconciliation

The process of comparing old Virtual DOM with new Virtual DOM and deciding what to update in the real DOM.

Works like this:

If elements are the same type (<div> → <div>), React updates only changed props.

If types are different (<div> → <span>), React destroys old and creates new.

For lists, React uses keys to detect moved/added/removed items.

4️⃣ Keys in React

Keys = unique identifiers for list items.

Help React track items during reconciliation → improves performance and avoids bugs.

Best practice: use stable IDs (e.g., database id).

❌ Avoid using index as key unless list never changes.

Example:

users.map(user => <li key={user.id}>{user.name}</li>)

🚀 Big Picture Flow

State/props change → React creates new Virtual DOM.

Reconciliation runs (diffing old vs new Virtual DOM).

Fiber engine schedules updates efficiently (priority, pause/resume).

React updates only the necessary parts of the real DOM.

Keys help React handle lists smartly without confusion.

This is the entire chain you asked:
👉 Virtual DOM (concept) → Fiber (engine) → Reconciliation (process) → Keys (optimization for lists).
 */