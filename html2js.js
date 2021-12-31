/** Just a shortcut to the "document.getElementById" function :)
 * @param {string} elementId The ID of the requested HTML element
 */
function getL(elementId) {

    return document.getElementById(elementId);

};



/** 
 * Creating a new HTML element, placing it under an existing element, And returns it.
 * @param {string} parentId The ID of element below it will be the new element
 * @param {string} type Type of new element. For example: div, p, img etc.
 * @param {Object} attributes Object that contains a list of attributes of the new element
 * @param {string} innerText The text content that displayed in the element
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



/* Adding a property to the DOM elements that allows to remove all the children below them */
if (typeof Element.prototype.removeChildren === 'undefined') {

    Object.defineProperty(Element.prototype, 'removeChildren', {
        configurable: true,
        enumerable: false,
        value: function () {
            while (this.firstChild) { this.removeChild(this.lastChild) };
        }
    });
    
};