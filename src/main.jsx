import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'

function MyApp(){
  return(
    <div>
      <h1>Custom App!..</h1>
    </div>
  )
}
const ReactElement = {
  type: "a",
  props: {
    href: "https://facebook.com",
    target: "_blank",
  },
  children: "Click me to visit Facebook"
}
const anotherElement = (
  <a href="https://facebook.com" target='_blank'>visit facebook</a>
)
const anotherUser = "I am always ready."
const reactElement = React.createElement(
  "a",
  {
    href: "https://facebook.com",
    target: "_blank",
  },
  "Click me to visit Facebook",
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    // <MyApp />
    // anotherElement
    reactElement
)
