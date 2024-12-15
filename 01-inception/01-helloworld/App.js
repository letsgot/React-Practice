// -----------------how to single element in dom ------------
// let heading = React.createElement("h1",{},"hello from reactjs");
// // this logs an object like this 
// // {
// //     "$$typeof": "Symbol(react.element)",  // Identifies that this is a React element
// //     "type": "h1",                        // Type of the element (in this case, an <h1> tag)
// //     "key": null,                         // Key for managing lists (not used here)
// //     "ref": null,                         // Ref to reference the element (not used here)
// //     "props": {                           // Properties passed to the element
// //       "children": "hello from reactjs"   // The content inside the <h1> tag
// //     },
// //     "_owner": null,                      // Component owner (null for this basic case)
// //     "_store": {                           // Internal data store used by React
// //       "validated": false                 // Validation status for React's internal use
// //     },
// //     "_self": null,                       // Self-reference (used for debugging)
// //     "_source": null                      // Source of the element (used for debugging)
// //   }
  
// console.log(heading)
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// --------------------- how to show multiple element on react ----------------------

let heading = React.createElement("div",{},[React.createElement("h1",{},"hello from reactjs1"),React.createElement("h1",{},"hello from reactjs2")]);
console.log(heading)
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);