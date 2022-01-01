# html-into-js - The minimal "framework"

## About this repository

<br/>

This repository providing a relatively convenient option for working with HTML elements directly from the JavaScript files,
So that during the execution of the project it is possible to create and / or delete specific HTML elements dynamically by the code, and without the need to reload any HTML files.

This method greatly simplifies the writing and visibility of the code, and implements the principles of [SPA architecture](https://en.wikipedia.org/wiki/Single-page_application).

<br/><br/>

## Instructions

<br/>

1. Save the html2js.js file to the website folder and create a reference to it in the head section of the main HTML file. for example:
```
<head>
  <script src="./scripts/html2js.js"></script>
</head>
```
<br/>

2. Make sure that the parent HTML element in the main HTML file, under which you want to create / edit / delete elements using the code, has an ID set for it. for example:
```
<body>
  <div id="MainDiv"></div>
</body>
```
<br/>

3. You can now directly from your code in JS:
  * Create elements by calling the `buildL` function
  * Access an existing element using the `getL` shortcut function
  * Delete an existing element using the `remove()` official property
  * Delete all sub-elements under an existing element using the `removeChildren()` property

<br/>

**Note! Make sure to add an ID to each element you create so that it can be accessed later.**

<br/><br/>

## Example

<br/>

Attached is a minimal example project, see [ExampleProject folder](ExampleProject).
To view online the results of the example project, you can click [on this link](https://htmlpreview.github.io/?https://github.com/Arye-H/html-into-js/blob/main/ExampleProject/index.html).
