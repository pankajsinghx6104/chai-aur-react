// 📝 Custom Render Function (Mini React Concept)

// This function mimics how React takes an element object
// and renders it into the DOM.
function customRender(reactElement, container) {

    /* ---------------- Basic Hardcoded Version ----------------
    // Step 1: Create a real DOM element based on type ('a')
    const domElement = document.createElement(reactElement.type)

    // Step 2: Add inner content (children text)
    domElement.innerHTML = reactElement.Children

    // Step 3: Set attributes manually (only works for 'href' and 'target')
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // Step 4: Attach the element to the container (#root)
    container.appendChild(domElement)
    ----------------------------------------------------------- */

    
    // ✅ Improved Dynamic Version
    // Create the DOM element based on 'type'
    const domElement = document.createElement(reactElement.type)

    // Add children (text inside element)
    domElement.innerHTML = reactElement.Children

    // Loop through all props dynamically and set them as attributes
    for (const prop in reactElement.props) {
        if (prop === 'Children') continue   // skip Children if inside props
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    // Finally, append the element into the container
    container.appendChild(domElement)
}

// React-like object (this is what JSX compiles down to internally)
const reactElement = {
    type: 'a',   // tag name
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to Visit google'   // text content
}

// Get root container
const mainConatiner = document.querySelector('#root')

// Render our reactElement into the DOM
customRender(reactElement, mainConatiner)
