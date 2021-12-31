function loadFunction() {

    getL("MainDiv").style.backgroundColor = "lightpink";

    buildL("MainDiv", "h1", { id: "MainHeader" }, "HTML Into JS Example");
    buildL("MainDiv", "div", { id: "DivDate", style: "padding: 10px; border: 1px solid black;" });
    buildL("DivDate", "button", { id: "BtnGetDate", onclick: () => { getDate(); } }, "Get a current date and time");

};

function getDate() {

    getL("DivDate").removeChildren();
    
    buildL("DivDate", "h3", { id: "DateString" }, new Date().toLocaleString());

};