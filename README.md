# html-into-js - The minimal "framework"

## About this repository

<br/>

This repository providing a relatively convenient option for working with HTML elements directly from the JavaScript files,
So that during the execution of the project it is possible to create and / or delete specific HTML elements dynamically by the code, and without the need to reload any HTML files.

This method greatly simplifies the writing and visibility of the code, and implements the principles of [SPA architecture](https://en.wikipedia.org/wiki/Single-page_application).

<br/><br/>

## Instructions

<br/>

1. Save the html2js.js file to the website folder and create a reference to this file in the head section of the main HTML file.<br/>For example:
```
<head>
  <script src="./scripts/html2js.js"></script>
</head>
```
<br/>

2. Be sure, that the parent HTML element in the main HTML file, which you want to use the create / edit / delete elements under it, has an ID.<br/>For example:
```
<body>
  <div id="MainDiv"></div>
</body>
```
<br/>

3. Now, you may do the below options, directly from your JS code:
  * Create elements by calling the `buildL` function.
  * Access an existing element using the `getL` shortcut function, and handle the element.
  * Delete an existing element using the `remove()` official JS property.
  * Delete all sub-elements under an existing element using the `removeChildren()` property.

<br/>

**Note! Be sure to add an ID to each element you create so you can access it later.**

<br/><br/>

## Example

<br/>

Attached is a minimal example project, see [ExampleProject folder](ExampleProject).
To view online the results of the example project, you can click [on this link](https://htmlpreview.github.io/?https://github.com/Arye-H/html-into-js/blob/main/ExampleProject/index.html).
