function loadFunction() {

    getL("MainDiv").style.backgroundColor = "lightpink";

    buildL("MainDiv", "h1", { id: "MainHeader" }, "HTML Into JS Example");
    buildL("MainDiv", "div", { id: "DivDate", style: "border: 1px solid black;" });
    buildL("DivDate", "label", { for: "BtnGetDate", style: "display: block;" }, "Click below button for deleting the elements inside this frame, and replace them by another new element");
    buildL("DivDate", "button", { id: "BtnGetDate", onclick: () => { getDate(); } }, "Get current date");

};

function getDate() {

    getL("DivDate").removeChildren();

    buildL("DivDate", "h3", { id: "DateString" }, new Date().toLocaleString());

};