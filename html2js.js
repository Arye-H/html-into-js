/** Just a shortcut to the "document.getElementById" function :)
 * @param {string} elementId ID of the requested HTML element
*/
function getL(elementId) {

    return document.getElementById(elementId);

};



/** 
 * Creating a new HTML element. Setting it under an existing element. Returns the created new element.
 * @param {string} parentId ID of the element, that has to include the new element.
 * @param {string} type Type of the new element. For example: div, p, img etc.
 * @param {Object} attributes Object that contains a list of attributes required for the new element.
 * @param {string} innerText The text which will be displayed on the element.
*/
function buildL(parentId, type, attributes = {}, innerText = "") {

    const newL = document.createElement(type);
    for (let a in attributes) {
        newL[a] = attributes[a];
    };
    newL.innerText = innerText;

    getL(parentId).appendChild(newL);
    return newL;

};



/* Adding a property to the DOM elements that allows to remove all its children */
if (typeof Element.prototype.removeChildren === 'undefined') {

    Object.defineProperty(Element.prototype, 'removeChildren', {
        configurable: true,
        enumerable: false,
        value: function () {
            while (this.firstChild) { this.removeChild(this.lastChild) };
        }
    });
    
};