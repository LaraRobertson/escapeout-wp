/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar,RichText,RichTextToolbarButton  } from "@wordpress/block-editor";
import { TextControl, TextareaControl, Flex, FlexItem, Button, PanelBody, PanelRow,
	ColorPicker, Toolbar, ToolbarButton, Dashicon, TextDecorationControl} from "@wordpress/components";
import { formatBold, formatItalic, link } from '@wordpress/icons';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { useState, useEffect} from 'react';




/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import AttachmentImage from './components/AttachmentImage';
import {randID} from "./components/randID";
import {IconDisplay} from "./components/IconDisplay";
import PuzzleEdit from "./components/PuzzleEdit";
import ClueEdit from "./components/ClueEdit";
import HintEdit from "./components/HintEdit";
import ZoneEdit from "./components/ZoneEdit";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const [showWaiver, setShowWaiver] = useState(false);
	const [showWaiver2, setShowWaiver2] = useState("test");
	const allowedBlocks = [ 'core/heading','core/paragraph' ];

	const MY_TEMPLATE = [
		['core/heading', { level: 3, placeholder: 'Insert your heading here...' }],
		['core/paragraph', { placeholder: 'Write some description text here...' }],
	]
	const blockProps = useBlockProps();
	const playZoneObject = {
	 	"id": "",
		"name": "",
		"description": "",
		"lat": "",
		"long": "",
		"imageID": "",
		"order": "",
		"disabled": "No",
	}
	const puzzleObject = {
		"name": "",
		"description": "",
		"question": "",
		"answer": "",
		"order": "",
		"disabled": "No",
	}
	const clueObject = {
		"name": "",
		"text": "",
		"iconName": "",
		"iconPath": "",
		"imageID": "",
		"order": "",
		"disabled": "No",
	}
	const hintObject = {
		"name": "",
		"text": "",
		"order": "",
		"disabled": "No",
	}
	// When the block loads, set playZones Array if not set or is just using default data
	useEffect( () => {
		if ( attributes.playZones.length===1 && attributes.playZones[0].id === "1") {
			console.log("playZones.length: " + attributes.playZones.length)
			console.log("playZones id: " + JSON.stringify(attributes.playZones))
			//add object to array
			/* edit zone id */
			//const zoneID = randID(6)
			//setAttributes({playZones: attributes.playZones.concat([{"id": zoneID,"name": "", "description": "", "lat": "", "long": "", "order": ""}])})
			// delete first index of playZone array because it just wasn't editable
			deletePlayZone(0)
		}
	}, [] );
	function updateGameName(value) {
		console.log("update game name");
		setAttributes({ gameName: value })
	}
	function updateGameText(value) {
		setAttributes({ gameText: value })
	}
	function updateZoneText(value) {
		console.log("update zone text");
		setAttributes({ zoneText: value })
	}
	function updateWaiverTop(value) {
		console.log("update waiver top");
		setAttributes({ waiverTop: value })
	}
	function updateWaiverBody(value) {
		console.log("update waiver body");
		setAttributes({ waiverBody: value })
	}
	function deletePlayZone(indexToDelete) {
		console.log("deletePlayZone")
		const newPlayZones = attributes.playZones.filter(function (x, index) {
			return index != indexToDelete
		})
		setAttributes({ playZones: newPlayZones })
	}

	function addZone() {
		console.log("addZone!")
		/* check zone id */
		const zoneID = randID(6)
		console.log("zoneID: " + zoneID)
		let newPlayZoneObject = {...playZoneObject}
		newPlayZoneObject.id = zoneID
		setAttributes({playZones: attributes.playZones.concat([newPlayZoneObject])})
	}
	function addPuzzleObject(index) {
		console.log("addPuzzle")
		const newArray = attributes.playZones.concat([]);
		const newObject = newArray[index];
		/* check for puzzleArray on object */
		if (Object.hasOwn(newObject, 'puzzleArray')) {
			newObject.puzzleArray.push(puzzleObject);
		} else {
			newObject.puzzleArray=[puzzleObject];
		}
		// ****
		// using = to copy keeps all the references so don't have to do this 2nd equal after changing
		// note, if the object has more levels the first level copying with spread (...) will still have reference if you copy
		// that way.   JSON.parse(JSON.stringify) will copy all levels without reference but messes up on undefines, symbols, etc
		// -> don't need: newArray[index] = newObject;
		// ******
		//console.log("puzzleArray newArray[index]1: " + JSON.stringify(newArray[index]));
		//console.log("puzzleArray newObject2: " + JSON.stringify(newObject));
		//console.log("puzzleArray newArray: " + JSON.stringify(newArray));
		setAttributes({playZones: newArray});
	}
	function addClueObject(index) {
		console.log("addClue");
		const newArray = attributes.playZones.concat([]);
		const newObject = newArray[index];
		/* check for clueArray on object */
		if (Object.hasOwn(newObject, 'clueArray')) {
			newObject.clueArray.push(clueObject);
		} else {
			newObject.clueArray=[clueObject];
		}
		setAttributes({playZones: newArray});
	}
	function addHintObject(index) {
		console.log("addHint");
		const newArray = attributes.playZones.concat([]);
		const newObject = newArray[index];
		/* check for clueArray on object */
		if (Object.hasOwn(newObject, 'hintArray')) {
			newObject.hintArray.push(hintObject);
		} else {
			newObject.hintArray=[hintObject];
		}
		setAttributes({playZones: newArray});
	}
	function editZone(field, newValue, index) {
		const newArray = attributes.playZones.concat([]);
		/*if (Object.hasOwn(newArray[index], field)) {
			console.log("has field: ");
		} else {
			console.log("does not has field: ");
		}*/
		newArray[index][field] = newValue;
		console.log("playZones newArray: " + JSON.stringify(newArray));
		setAttributes({playZones: newArray});
	}
	function editZoneMedia(media, index) {
		//console.log("editClueMedia: " + JSON.stringify(media));
		const newArray = attributes.playZones.concat([]);
		newArray[index]["imageID"] = media.id;
		newArray[index]["imageURL"] = media.url;
		//console.log("playZones newArray: " + JSON.stringify(newArray));
		setAttributes({playZones: newArray});
	}

	if (attributes.playZones.length>0) {
	return (
		<div {...blockProps}>
			<div className="game-block-edit-block" style={{backgroundColor: attributes.bgColor}}>
				<div className="like-label">Go To:</div>
				<Flex>
					<a href="#zone-help-text" className={"button"}>Zone Help Text</a>
					<a href="#puzzle-help-text" className={"button"}>Puzzle Help Text</a>
					<a href="#clue-help-text" className={"button"}>Clue Help Text</a>
					<a href="#hint-help-text" className={"button"}>Hint Help Text</a>
					<a href="#waiver-text" className={"button"}>Waiver Text</a>
				</Flex>
				<div className="like-label">Game Text:</div>
				<div style={{backgroundColor: "white", padding: "10px", marginBottom: "10px"}}><InnerBlocks
					allowedBlocks={allowedBlocks} template={MY_TEMPLATE}
					templateLock="all"/></div>
				<BlockControls>

				</BlockControls>
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
				</InspectorControls>

				<TextControl label="Game Name:" value={attributes.gameName} onChange={updateGameName}
							 style={{fontSize: "20px"}}/>

				<div className={"item-holder-edit"}>
					{attributes.playZones.map(function (playZone, index) {
						return (
							<div key={index} className={"zoneDiv"}>
								<ZoneEdit playZone={playZone} index={index} editZoneMedia={editZoneMedia}
										  editZone={editZone} deletePlayZone={deletePlayZone}/>
								<Flex justify={"flex-start"} className={"buttons"}>
									<FlexItem>
										<Button
											isPrimary
											onClick={() => {
												addClueObject(index)
											}}
										>
											Add Clue
										</Button>
									</FlexItem>
									<FlexItem>
										<Button
											isPrimary
											onClick={() => {
												addHintObject(index)
											}}
										>
											Add Hint
										</Button>
									</FlexItem>
									<FlexItem>
										<Button
											isPrimary
											onClick={() => {
												addPuzzleObject(index)
											}}
										>
											Add Puzzle
										</Button>
									</FlexItem>
								</Flex>
								<div className={"item-holder-edit"}>
									<PuzzleEdit puzzleArray={playZone.puzzleArray} index={index}
												attributes={attributes} setAttributes={setAttributes}
												playZoneName={playZone.name}/>
								</div>
								<div className={"item-holder-edit"}>
									<ClueEdit clueArray={playZone.clueArray} index={index} attributes={attributes}
											  setAttributes={setAttributes} playZoneName={playZone.name}/>
								</div>
								<div className={"item-holder-edit"}>
									<HintEdit hintArray={playZone.hintArray} index={index} attributes={attributes}
											  setAttributes={setAttributes} playZoneName={playZone.name}/>
								</div>
							</div>
						)
					})}
				</div>

				<Flex>
					<FlexItem>
						<Button
							isPrimary
							onClick={() => {
								addZone();
							}}
						>
							Add Another Zone
						</Button>
					</FlexItem>
				</Flex>
				<div className="text-area-container" id={"zone-help-text"}>
					<TextareaControl label="Zone Help Text':" value={attributes.zoneText} onChange={updateZoneText}
									 style={{fontSize: "15px"}}/>
				</div>
				<div className="like-label" id={"waiver-text"}>Waiver Text:</div>
				<div className="text-area-container" >
					<TextareaControl label="Waiver Top:" value={attributes.waiverTop} onChange={updateWaiverTop}
									 style={{fontSize: "15px"}}/>
					<TextareaControl label="Waiver Body':" value={attributes.waiverBody} onChange={updateWaiverBody}
									 style={{fontSize: "15px"}}/>
					<Button
						isPrimary
						onClick={() => {
							setShowWaiver(!showWaiver);
						}}
					>
						<div className={showWaiver ? "hide" : "show"}>View Waiver Text</div>
						<div className={showWaiver ? "show" : "hide"}>Close Waiver Text</div>
					</Button>
					<div className={showWaiver ? "waiver-container show" : "hide"}>
						<div className={"waiver-top"}>{attributes.waiverTop}</div>
						<div className={"waiver-body"}>{attributes.waiverBody}</div>
					</div>
				</div>
			</div>
		</div>
	);
	} else {
		return (
			<div {...blockProps}>
		<div className="game-block-edit-block" style={{backgroundColor: attributes.bgColor}}>
				<h4>The first step to creating a game is adding a Zone.</h4>
				<div>Zones are areas where people will play. Your Clues and Puzzles should be about things in the Zone area.
				Typically Zones have a center and the play area is about 100 feet around center. Games can have more than 1 Zone.</div>
				<br />
				<Flex>
					<FlexItem>
						<Button
							isPrimary
							onClick={() => {
								addZone();
							}}
						>
							Add A Zone
						</Button>
					</FlexItem>
				</Flex>
			</div>
		</div>
		);
	}
}