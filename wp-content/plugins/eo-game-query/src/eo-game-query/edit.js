/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, PanelRow, ColorPicker, TextControl, ToggleControl } from '@wordpress/components';
import { useState } from 'react';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit({ attributes, setAttributes } ) {

	/*const cities = window.my_data2['cities'];
	const locations = window.my_data2['locations'];
	console.log("cities: " + JSON.stringify(cities));
	console.log("locations: " + JSON.stringify(locations));*/
	function updateCityName(value) {
		console.log("update city name");
		setAttributes({ cityName: value })
	}
	const { cityName } = attributes;
	const [ color, setColor ] = useState ( '#f00' )
	const colors = [
		{ name: 'red', color: '#f00' },
		{ name: 'white', color: '#fff' },
		{ name: 'blue', color: '#00f' },
	];
	return (
		<>
			<InspectorControls>
				<PanelBody title="Background Color" initialOpen={true}>
					<PanelRow>
						<ColorPicker
							color={attributes.bgColor}
							onChange={x => setAttributes({bgColor: x})}
							enableAlpha
							defaultValue="#000"
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Text Color" initialOpen={true}>
					<PanelRow>
						<ColorPicker
							color={attributes.textColor}
							onChange={x => setAttributes({textColor: x})}
							enableAlpha
							defaultValue="#000"
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={"item-holder-edit"}>
				<div className={"flex-games"}>
					<div className="game-card show eo-test-game level0"  style={{backgroundColor: attributes.bgColor}}>
						<div className="eo-test-game-test">TESTING</div>
						<div className="inner-game-card">
							<div className="game-card-full">
								<h2><a href="#">the title of game</a>
								</h2>
							</div>
							<div className="game-card-full small" style={{color: attributes.textColor}}>
								excerpt of the game
							</div>
						</div>
						<div className="inner-game-card1">
							<h5 style={{color: attributes.textColor}}>city name</h5>
							<h5 style={{color: attributes.textColor}}>location name <a href="#">location link</a></h5>
							<h5 style={{color: attributes.textColor}}>level:</h5>
							<small style={{color: attributes.textColor}}>February 17th, 2025 by <a href="#">link to designer page</a> </small>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
