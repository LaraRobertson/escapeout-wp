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
import { PanelBody, SelectControl, Flex, FlexItem, Button, PanelRow, ColorPicker, TextControl, ToggleControl } from '@wordpress/components';
import { useState } from 'react';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit({ attributes, setAttributes } ) {
	/* ability to add map link to find a game page */
	const cityObject = {
		"name": "",
		"link": "",
		"disabled": "No",
	}
	function addCity() {
		console.log("addCity!")
		let newCityObject = {...cityObject}
		setAttributes({cityArray: attributes.cityArray.concat([newCityObject])})
	}
	function editCity(field, newValue, index) {
		const newArray = attributes.cityArray.concat([]);
		console.log("city newArray1: " + JSON.stringify(newArray));
		/*if (Object.hasOwn(newArray[index], field)) {
			console.log("has field: ");
		} else {
			console.log("does not has field: ");
		}*/
		newArray[index][field] = newValue;
		console.log("city newArray2: " + JSON.stringify(newArray));
		setAttributes({cityArray: newArray});
	}
	return (
		<>
			<InspectorControls>
				<PanelBody title="Background Color" initialOpen={true}>
					<PanelRow>
						<ColorPicker
							color={attributes.bgColor}
							onChange={x => setAttributes({bgColor: x})}
							enableAlpha
							defaultValue="#EBEBEB"
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
				<PanelBody title="Link Color" initialOpen={true}>
					<PanelRow>
						<ColorPicker
							color={attributes.linkColor}
							onChange={x => setAttributes({linkColor: x})}
							enableAlpha
							defaultValue="#0B441D"
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={"item-holder-edit"}>
				<Flex>
				{attributes.cityArray.map(function (city, index) {
					return (
						<div key={index} className={"cityDiv"}>
							<div className="item-title-edit">City {index + 1}:</div>
							<FlexItem>
								<div className={"flexBlock200"}>
									<TextControl
										label="City Name (slug with -)"
										autoFocus={city.name == undefined}
										value={city.name}
										onChange={newValue => {
											editCity("name", newValue, index)
										}}
									/>
									<TextControl
										label="City Map Link"
										autoFocus={city.link == undefined}
										value={city.link}
										onChange={newValue => {
											editCity("link", newValue, index)
										}}
									/>
								</div>
							</FlexItem>
						</div>
					)
				})}
				</Flex>
				<Flex>
					<FlexItem>
						<Button
							isPrimary
							onClick={() => {
								addCity();
							}}
						>
							Add Another City
						</Button>
					</FlexItem>
				</Flex>
			</div>
			<div className={"item-holder-edit"}>
				<h2>Display to help pick Colors</h2>
				<div className={"flex-games"}>
					<div className="game-card show eo-test-game level-0" style={{backgroundColor: attributes.bgColor}}>
						<div className="eo-test-game-test">TESTING</div>
						<div className="inner-game-card">
							<div className="game-card-full">
								<h2><a style={{color: attributes.linkColor}}  href="#">the title of game</a>
								</h2>
							</div>
							<div style={{color: attributes.textColor}} className="game-card-full small">
								excerpt of the game
							</div>
						</div>
						<div className="inner-game-card1">
							<div style={{color: attributes.textColor}}>city: <a style={{color: attributes.linkColor}} href="#">city link</a></div>
							<div style={{color: attributes.textColor}}><a style={{color: attributes.linkColor}} href="#">location link</a></div>
							<div style={{color: attributes.textColor}}>level:</div>
							<small style={{color: attributes.textColor}}>published on February 17th, 2025 by <a style={{color: attributes.linkColor}} href="#">link to designer page</a> </small>
						</div>
					</div>
				</div>
			</div>


		</>
	);
}
