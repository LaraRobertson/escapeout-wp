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
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit({ attributes, setAttributes } ) {

	const cities = window.my_data2['cities'];
	const locations = window.my_data2['locations'];
	console.log("cities: " + JSON.stringify(cities));
	console.log("locations: " + JSON.stringify(locations));
	function updateCityName(value) {
		console.log("update city name");
		setAttributes({ cityName: value })
	}
	const { cityName } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'copyright-date-block' ) }>
					Testing
				</PanelBody>
			</InspectorControls>
			<div className={"item-holder-edit"}>
				<SelectControl
					label="City"
					value={cityName}
					onChange={updateCityName}
					__nextHasNoMarginBottom
				>
					<option value=''>select city</option>
					{cities?.map(function (city, index2) {
						return (
							<option value={city.name}>{city.name}</option>
						)
					})}
				</SelectControl>
			</div>
		</>
	);
}
