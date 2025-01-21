/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

	/* eslint-disable no-console */
let elementsArrayShow = document.querySelectorAll('.button-show');

elementsArrayShow.forEach(function(elem) {
	elem.addEventListener("click", function(event) {
		const name = event.target.dataset.name;
		console.log('Name (show):', name);
		const elements = document.querySelectorAll("." + name);
		elements.forEach(element => {
			element.classList.add("show");
			element.classList.remove("hide");
		});
		const buttonHide = document.getElementsByClassName(name + "-hide")[0];
		buttonHide.classList.remove('hide');
		buttonHide.classList.add('show');
		const buttonShow = document.getElementsByClassName(name + "-show")[0];
		buttonShow.classList.remove('show');
		buttonShow.classList.add('hide');
	});
});
let elementsArrayHide = document.querySelectorAll('.button-hide');

elementsArrayHide.forEach(function(elem) {
	elem.addEventListener("click", function(event) {
		const name = event.target.dataset.name;
		console.log('Name (hide):', name);
		const elements = document.querySelectorAll("." + name);
		elements.forEach(element => {
			element.classList.add("hide");
			element.classList.remove("show");
		});
		const buttonHide = document.getElementsByClassName(name + "-hide")[0];
		buttonHide.classList.remove('show');
		buttonHide.classList.add('hide');
		const buttonShow = document.getElementsByClassName(name + "-show")[0];
		buttonShow.classList.remove('hide');
		buttonShow.classList.add('show');
	});
});

