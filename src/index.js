//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
//Create a React component
const App = () => {
  return <div>Hello, I'm React</div>;
};
//Take the react component and show it on the screen
//render is a function which takes arguments
//first argument - <App/> is JSX of the component we created
//second argument is reference to "root" element of index.html
ReactDOM.render(<App />, document.querySelector("#root"));
