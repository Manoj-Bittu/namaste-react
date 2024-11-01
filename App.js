/*

<div id="parent">
    <div id="child"> 
    <h1>I'm h1 tag</h1>
    <h2<I'm h2 tag</h2>
    </div>
</div>


*/

// const heading = React.createElement("h1",{id:"heading"},"Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const heading = React.createElement("div",{id:"parent"},[React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);