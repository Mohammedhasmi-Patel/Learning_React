const headingFirst = React.createElement("h1", {}, "First Heading");
const headingSecond = React.createElement("h2", {}, "Second Heading");
const container = React.createElement("div", {}, [headingFirst, headingSecond]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
