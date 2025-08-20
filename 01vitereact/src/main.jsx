// Importing core React features
import { StrictMode } from 'react'   // Optional: used to highlight potential problems in React apps
import React from 'react'            // Main React library
import { createRoot } from 'react-dom/client' // Used to create root for rendering React components
import App from './App.jsx'          // Importing custom component (App) from App.jsx file

// --------- Custom Functional Component ----------
function MyApp() {
  return(
    <div>
      <h1>CustomApp !!!!!</h1>
    </div>
  )
}
// Above we created a simple component MyApp which returns a <div> with <h1>

// --------- Object representing a React Element manually ----------
const ReactElement = {
    type: 'a',   // 'a' means anchor tag (<a>)
    props: {
        href: 'https://google.com',   // attribute for link
        target: '_blank'              // opens in new tab
    },
    Children: 'Click me to Visit google'   // text that will appear inside <a>
}
// NOTE: This object looks like React element, 
// but it will not render directly because React expects its own element format.
// It’s just for understanding structure.

// --------- JSX React Element ----------
const AnotherElement = (
  <a href="https://google.com" target='_blank'>
    Visit Google
  </a>
)
// AnotherElement is created using JSX. 
// JSX automatically converts this into React.createElement under the hood.

// --------- Variable used inside a React element ----------
const anotherUser = "BANNA"

// Creating a React element using React.createElement method
const reactElementt = React.createElement(
  'a',  // tag type = <a>
  { href: 'https://google.com', target: '_blank' },  // props
  'click me to visiiiiittttt googleeee',   // first child text
  anotherUser   // second child text → BANNA
)
// So final render will look like: 
// <a href="https://google.com" target="_blank">click me to visiiiiittttt googleeeeBANNA</a>

// --------- Rendering to DOM ----------
createRoot(document.getElementById('root')).render(
    <>
      <App />            {/* Rendering App component */}
      <MyApp />          {/* Rendering custom MyApp component */}
      {AnotherElement}   {/* Rendering JSX anchor element */}
      {reactElementt}    {/* Rendering element created with React.createElement */}
    </>
)
