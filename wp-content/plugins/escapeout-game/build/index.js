/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/AttachmentImage.js":
/*!*******************************************!*\
  !*** ./src/components/AttachmentImage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttachmentImage)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * AttachmentImage
 *
 * This component is used to display an image from the media library.
 * It's meant as a JS companion to the PHP function `wp_get_attachment_image()`.
 *
 * @link https://www.briancoords.com/getting-wordpress-media-library-images-in-javascript/
 *
 * @param {object} props
 * @param {number} props.imageId The ID of the image to display.
 * @param {string} props.size The size of the image to display. Defaults to 'full'.
 * @returns {*} React JSX
 */

function AttachmentImage({
  imageId,
  size = 'thumbnail'
}) {
  const {
    image
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => ({
    image: select('core').getMedia(imageId)
  }));
  const imageAttributes = () => {
    let attributes = {
      src: image.source_url,
      alt: image.alt_text,
      className: `attachment-${size} size-${size}`,
      width: image.media_details.width,
      height: image.media_details.height
    };
    if (image.media_details && image.media_details.sizes && image.media_details.sizes[size]) {
      attributes.src = image.media_details.sizes[size].source_url;
      attributes.width = image.media_details.sizes[size].width;
      attributes.height = image.media_details.sizes[size].height;
    }
    return attributes;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: image && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      ...imageAttributes()
    })
  });
}

/***/ }),

/***/ "./src/components/ClueEdit.js":
/*!************************************!*\
  !*** ./src/components/ClueEdit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClueEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IconDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconDisplay */ "./src/components/IconDisplay.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _manageArrayItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manageArrayItem */ "./src/components/manageArrayItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function editClueMedia(media, index, index2, attributes, setAttributes) {
  //console.log("editClueMedia: " + JSON.stringify(media));
  const newArray = attributes.playZones.concat([]);
  newArray[index]["clueArray"][index2]["imageID"] = media.id;
  newArray[index]["clueArray"][index2]["imageURL"] = media.url;
  //console.log("playZones newArray: " + JSON.stringify(newArray));
  setAttributes({
    playZones: newArray
  });
}
function ClueEdit({
  clueArray,
  index,
  attributes,
  setAttributes,
  playZoneName
}) {
  const ALLOWED_MEDIA_TYPES = ['image'];
  if (typeof clueArray != "undefined") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: clueArray?.map(function (clue, index2) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "clueDiv",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: clue.disabled == "Yes" ? "disabled" : ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "item-title-edit",
            children: ["Clues ", index2 + 1, " (zone name:  ", playZoneName, "):"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                label: "Clue Name",
                autoFocus: clue.name == undefined,
                value: clue.name,
                onChange: newValue => {
                  (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_4__.editArrayItem)("clue", "name", newValue, index, index2, attributes, setAttributes);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                label: "Clue Text",
                autoFocus: clue.text == undefined,
                value: clue.text,
                onChange: newValue => {
                  (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_4__.editArrayItem)("clue", "text", newValue, index, index2, attributes, setAttributes);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
                label: "Icon",
                value: clue.iconName,
                options: [{
                  label: 'choose icon',
                  value: ''
                }, {
                  label: 'magnifying glass',
                  value: 'magnifying-glass'
                }, {
                  label: 'torn paper',
                  value: 'torn-paper'
                }, {
                  label: 'envelope',
                  value: 'envelope'
                }, {
                  label: 'message in a bottle',
                  value: 'message-in-a-bottle'
                }, {
                  label: 'note question',
                  value: 'note-question'
                }, {
                  label: 'diary',
                  value: 'diary'
                }],
                onChange: newValue => {
                  (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_4__.editArrayItem)("clue", "iconName", newValue, index, index2, attributes, setAttributes);
                },
                __nextHasNoMarginBottom: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_IconDisplay__WEBPACK_IMPORTED_MODULE_2__.IconDisplay, {
                  iconPath: clue.iconPath
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUploadCheck, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
                  onSelect: media => {
                    editClueMedia(media, index, index2, attributes, setAttributes);
                  },
                  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Clue Image', 'game-block'),
                  allowedTypes: ALLOWED_MEDIA_TYPES,
                  multiple: false,
                  value: clue.imageID,
                  render: ({
                    open
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                      className: "button",
                      onClick: open,
                      children: "Open Media Library"
                    }), clue.imageURL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: clue.imageURL,
                      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Clue Image', 'game-block'),
                      style: {
                        display: 'block',
                        maxWidth: '250px',
                        height: 'auto'
                      }
                    })]
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              direction: "column",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
                  selected: clue.disabled,
                  options: [{
                    label: 'Live',
                    value: 'No'
                  }, {
                    label: 'Disabled',
                    value: 'Yes'
                  }],
                  onChange: newValue => {
                    (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_4__.editArrayItem)("clue", "disabled", newValue, index, index2, attributes, setAttributes);
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                  label: "Order",
                  style: {
                    width: "50px"
                  },
                  type: "number",
                  autoFocus: clue.order == undefined,
                  value: clue.order,
                  onChange: newValue => {
                    (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_4__.editArrayItem)("clue", "order", newValue, index, index2, attributes, setAttributes);
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                  isLink: true,
                  className: "attention-delete",
                  onClick: () => (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_4__.deleteArrayItem)("clue", clueArray, index, index2, attributes, setAttributes),
                  children: "Delete"
                })
              })]
            })]
          })]
        }, index2);
      })
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: "no clues"
    });
  }
}

/***/ }),

/***/ "./src/components/FlexButtons.js":
/*!***************************************!*\
  !*** ./src/components/FlexButtons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlexButtons)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function FlexButtons({
  attributes,
  setAttributes
}) {
  const [showWaiver, setShowWaiver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showHelp, setShowHelp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showMap1, setShowMap1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showMap1View, setShowMap1View] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showHelpFields, setShowHelpFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showWaiverFields, setShowWaiverFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  function updateZoneText(value) {
    console.log("update zone text");
    setAttributes({
      zoneText: value
    });
  }
  function updateMap1(value) {
    console.log("update map 1");
    setAttributes({
      map1: value
    });
  }
  function updateWaiverTop(value) {
    console.log("update waiver top");
    setAttributes({
      waiverTop: value
    });
  }
  function updateWaiverBody(value) {
    console.log("update waiver body");
    setAttributes({
      waiverBody: value
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex-button",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        isPrimary: true,
        onClick: () => {
          setShowHelp(!showHelp);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: showHelp ? "hide" : "show",
          children: "Show Help for Game Design"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: showHelp ? "show" : "hide",
          children: "Close Help for Game Design"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        isPrimary: true,
        onClick: () => {
          setShowHelpFields(!showHelpFields);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: showHelpFields ? "hide" : "show",
          children: "Show in-Game Help Fields"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: showHelpFields ? "show" : "hide",
          children: "Close in-Game Help Fields"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        isPrimary: true,
        onClick: () => {
          setShowWaiverFields(!showWaiverFields);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: showWaiverFields ? "hide" : "show",
          children: "Show Waiver"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: showWaiverFields ? "show" : "hide",
          children: "Close Waiver"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        isPrimary: true,
        onClick: () => {
          setShowMap1(!showMap1);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: showMap1 ? "hide" : "show",
          children: "Show Public Map Src Code"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: showMap1 ? "show" : "hide",
          children: "Close Public Map Src Code"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: showHelp ? "show" : "hide",
      children: ["HOW TO CREATE A GAME:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: "Do Not Publish Game for public until you are done testing. Create a private page with a password."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: "Games are based on Zones. Create a Zone and then create clues, puzzles, and hints"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: "Zones are area with a radius of about 100 feet. Let the player know the center of the zone AND/OR if it does not have a diameter of 100feet (if you change this, change help text for zones, in-Game Help Field)."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: "Each game has a waiver - default text provided (you can change)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: "Each game has a help area for player - default text provided (you can change)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: "You can change color of background of game - see tool on right"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: "Provide a header and description for each game."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: "Provide a Walking Distance for each game - estimated total walking distance for player, usually based on zones and how far apart."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: showHelpFields ? "show" : "hide",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "text-area-container",
        id: "zone-help-text",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
          label: "Zone Help Text':",
          value: attributes.zoneText,
          onChange: updateZoneText,
          style: {
            fontSize: "15px"
          }
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: showWaiverFields ? "show" : "hide",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "text-area-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
          label: "Waiver Top:",
          value: attributes.waiverTop,
          onChange: updateWaiverTop,
          style: {
            fontSize: "15px"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
          label: "Waiver Body':",
          value: attributes.waiverBody,
          onChange: updateWaiverBody,
          style: {
            fontSize: "15px"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          isPrimary: true,
          onClick: () => {
            setShowWaiver(!showWaiver);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: showWaiver ? "hide" : "show",
            children: "View Waiver Text"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: showWaiver ? "show" : "hide",
            children: "Close Waiver Text"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: showWaiver ? "waiver-container show" : "hide",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "waiver-top",
            children: attributes.waiverTop
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "waiver-body",
            children: attributes.waiverBody
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: showMap1 ? "show" : "hide",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "like-label",
        id: "waiver-text",
        children: "Public Map src code (go to https://mymaps.google.com):"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "text-area-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: "Map 1:",
          value: attributes.map1,
          onChange: updateMap1,
          style: {
            fontSize: "15px"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          isPrimary: true,
          onClick: () => {
            setShowMap1View(!showMap1View);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: showMap1View ? "hide" : "show",
            children: "View Public Map"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: showMap1View ? "show" : "hide",
            children: "Close Public Map"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: showMap1View ? "showmodal modalContainerMap" : "hide modalContainerMap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        class: "modal from-right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("header", {
          class: "modal_header",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
              children: "Public Map"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              class: "small",
              children: "(click on right arrow or icons for zone name(s))"
            }), " "]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("main", {
          class: "modal_content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("iframe", {
            src: attributes.map1,
            width: "100%",
            height: "400px"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("footer", {
          class: "modal_footer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            isPrimary: true,
            onClick: () => {
              setShowMap1View(!showMap1View);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              children: "Close Public Map"
            })
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/components/HintEdit.js":
/*!************************************!*\
  !*** ./src/components/HintEdit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HintEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _manageArrayItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageArrayItem */ "./src/components/manageArrayItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function HintEdit({
  hintArray,
  index,
  attributes,
  setAttributes,
  playZoneName
}) {
  if (typeof hintArray != "undefined") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: hintArray?.map(function (hint, index2) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "puzzleDiv",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: hint.disabled == "Yes" ? "disabled" : ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item-title-edit",
            children: ["Hints ", index2 + 1, " (zone name: ", playZoneName, "):"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
                label: "Hint Name",
                autoFocus: hint.name == undefined,
                value: hint.name,
                onChange: newValue => {
                  (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.editArrayItem)("hint", "name", newValue, index, index2, attributes, setAttributes);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
                label: "Hint Text",
                autoFocus: hint.text == undefined,
                value: hint.text,
                onChange: newValue => {
                  (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.editArrayItem)("hint", "text", newValue, index, index2, attributes, setAttributes);
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
              direction: "column",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RadioControl, {
                  selected: hint.disabled,
                  options: [{
                    label: 'Live',
                    value: 'No'
                  }, {
                    label: 'Disabled',
                    value: 'Yes'
                  }],
                  onChange: newValue => {
                    (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.editArrayItem)("hint", "disabled", newValue, index, index2, attributes, setAttributes);
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
                  label: "Order",
                  style: {
                    width: "50px"
                  },
                  type: "number",
                  autoFocus: hint.order == undefined,
                  value: hint.order,
                  onChange: newValue => {
                    (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.editArrayItem)("hint", "order", newValue, index, index2, attributes, setAttributes);
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
                  isLink: true,
                  className: "attention-delete",
                  onClick: () => (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.deleteArrayItem)("hint", hintArray, index, index2, attributes, setAttributes),
                  children: "Delete"
                })
              })]
            })]
          })]
        }, index2);
      })
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: "no hints"
    });
  }
}

/***/ }),

/***/ "./src/components/IconDisplay.js":
/*!***************************************!*\
  !*** ./src/components/IconDisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconDisplay: () => (/* binding */ IconDisplay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function IconDisplay({
  iconPath
}) {
  //console.log("name: " + iconName);
  const siteURL = window.my_data.siteUrl;
  //console.log("siteURL:" + siteURL);
  //console.log("window.my_data.siteUrl:" + window.my_data.siteUrl);
  const imageURL = siteURL + iconPath + ".svg";
  if (iconPath !== "") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: imageURL
      })
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      children: "icon not set"
    });
  }
}

/***/ }),

/***/ "./src/components/PuzzleEdit.js":
/*!**************************************!*\
  !*** ./src/components/PuzzleEdit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PuzzleEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _manageArrayItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageArrayItem */ "./src/components/manageArrayItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function PuzzleEdit({
  puzzleArray,
  index,
  attributes,
  setAttributes,
  playZoneName
}) {
  if (typeof puzzleArray != "undefined") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: puzzleArray?.map(function (puzzle, index2) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "puzzleDiv",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: puzzle.disabled == "Yes" ? "disabled" : ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item-title-edit",
            children: ["Puzzles ", index2 + 1, " (zone name: ", playZoneName, "):"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
                label: "Puzzle Name",
                autoFocus: puzzle.name == undefined,
                value: puzzle.name,
                onChange: newValue => {
                  (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.editArrayItem)("puzzle", "name", newValue, index, index2, attributes, setAttributes);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
                label: "Puzzle Description",
                autoFocus: puzzle.description == undefined,
                value: puzzle.description,
                onChange: newValue => {
                  (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.editArrayItem)("puzzle", "description", newValue, index, index2, attributes, setAttributes);
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexBlock, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
                label: "Puzzle Question",
                autoFocus: puzzle.question == undefined,
                value: puzzle.question,
                onChange: newValue => {
                  (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.editArrayItem)("puzzle", "question", newValue, index, index2, attributes, setAttributes);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
                label: "Puzzle Answer",
                autoFocus: puzzle.answer == undefined,
                value: puzzle.answer,
                onChange: newValue => {
                  (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.editArrayItem)("puzzle", "answer", newValue, index, index2, attributes, setAttributes);
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
              direction: "column",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RadioControl, {
                  selected: puzzle.disabled,
                  options: [{
                    label: 'Live',
                    value: 'No'
                  }, {
                    label: 'Disabled',
                    value: 'Yes'
                  }],
                  onChange: newValue => {
                    (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.editArrayItem)("puzzle", "disabled", newValue, index, index2, attributes, setAttributes);
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
                  label: "Order",
                  style: {
                    width: "50px"
                  },
                  type: "number",
                  autoFocus: puzzle.order == undefined,
                  value: puzzle.order,
                  onChange: newValue => {
                    (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.editArrayItem)("puzzle", "order", newValue, index, index2, attributes, setAttributes);
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
                  isLink: true,
                  className: "attention-delete",
                  onClick: () => (0,_manageArrayItem__WEBPACK_IMPORTED_MODULE_1__.deleteArrayItem)("puzzle", puzzleArray, index, index2, attributes, setAttributes),
                  children: "Delete"
                })
              })]
            })]
          })]
        }, index2);
      })
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: "no puzzles"
    });
  }
}

/***/ }),

/***/ "./src/components/ZoneEdit.js":
/*!************************************!*\
  !*** ./src/components/ZoneEdit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoneEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AttachmentImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttachmentImage */ "./src/components/AttachmentImage.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function ZoneEdit({
  playZone,
  index,
  editZoneMedia,
  removeImage,
  editZone,
  deletePlayZone
}) {
  const ALLOWED_MEDIA_TYPES = ['image'];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: playZone.disabled == "Yes" ? "disabled" : ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "item-title-edit",
      children: ["Zones ", index + 1, ":"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flexBlock200",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Zone Name",
          autoFocus: playZone.name == undefined,
          value: playZone.name,
          onChange: newValue => {
            editZone("name", newValue, index);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Zone Description",
          autoFocus: playZone.description == undefined,
          value: playZone.description,
          onChange: newValue => {
            editZone("description", newValue, index);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Latitude",
          className: "hide",
          autoFocus: playZone.lat == undefined,
          value: playZone.lat,
          onChange: newValue => {
            editZone("lat", newValue, index);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Longitude",
          className: "hide",
          autoFocus: playZone.long == undefined,
          value: playZone.long,
          onChange: newValue => {
            editZone("long", newValue, index);
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "mediaColumn",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
              onSelect: media => {
                editZoneMedia(media, index);
              },
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Zone Image', 'game-block'),
              allowedTypes: ALLOWED_MEDIA_TYPES,
              multiple: false,
              value: playZone.imageID,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                  className: "button",
                  onClick: open,
                  children: "Open Media Library"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AttachmentImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  imageId: playZone.imageID
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            className: playZone.imageID === "" ? "hide" : "button show",
            onClick: () => removeImage(index),
            children: "Remove Image"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
          selected: playZone.disabled,
          options: [{
            label: 'Live',
            value: 'No'
          }, {
            label: 'Disabled',
            value: 'Yes'
          }],
          onChange: newValue => {
            editZone("disabled", newValue, index);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Order",
          style: {
            width: "50px"
          },
          type: "number",
          autoFocus: playZone.order == undefined,
          value: playZone.order,
          onChange: newValue => {
            editZone("order", newValue, index);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          isLink: true,
          className: "attention-delete",
          onClick: () => deletePlayZone(index),
          children: "Delete"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/components/manageArrayItem.js":
/*!*******************************************!*\
  !*** ./src/components/manageArrayItem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteArrayItem: () => (/* binding */ deleteArrayItem),
/* harmony export */   editArrayItem: () => (/* binding */ editArrayItem)
/* harmony export */ });
function editArrayItem(itemType, field, newValue, index, index2, attributes, setAttributes) {
  const newArray = attributes.playZones.concat([]);
  switch (itemType) {
    case "puzzle":
      newArray[index]["puzzleArray"][index2][field] = newValue;
      break;
    case "clue":
      newArray[index]["clueArray"][index2][field] = newValue;
      if (field === "iconName") {
        //const siteURL =window.my_data.siteUrl;
        //console.log("siteURL:" + siteURL);
        //console.log("window.my_data.siteUrl:" + window.my_data.siteUrl);
        const imageURL = "/wp-content/plugins/escapeout-game/assets/" + newValue;
        newArray[index]["clueArray"][index2]["iconPath"] = imageURL;
      }
      break;
    case "hint":
      newArray[index]["hintArray"][index2][field] = newValue;
      break;
  }
  setAttributes({
    playZones: newArray
  });
}
function deleteArrayItem(itemType, itemArray, zoneIndex, indexToDelete, attributes, setAttributes) {
  const newArray = attributes.playZones.concat([]);
  const newItemArray = itemArray.filter(function (x, index) {
    return index != indexToDelete;
  });
  switch (itemType) {
    case "puzzle":
      console.log("delete puzzle");
      if (newItemArray.length === 0) {
        const newObject = newArray[zoneIndex];
        delete newObject.puzzleArray;
      } else {
        newArray[zoneIndex]["puzzleArray"] = newItemArray;
      }
      break;
    case "clue":
      console.log("delete clue");
      if (newItemArray.length === 0) {
        const newObject = newArray[zoneIndex];
        delete newObject.clueArray;
      } else {
        newArray[zoneIndex]["clueArray"] = newItemArray;
      }
      break;
    case "hint":
      console.log("delete hint");
      if (newItemArray.length === 0) {
        const newObject = newArray[zoneIndex];
        delete newObject.hintArray;
      } else {
        newArray[zoneIndex]["hintArray"] = newItemArray;
      }
      break;
  }
  setAttributes({
    playZones: newArray
  });
}

/***/ }),

/***/ "./src/components/randID.js":
/*!**********************************!*\
  !*** ./src/components/randID.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randID: () => (/* binding */ randID)
/* harmony export */ });
const randID = size => {
  const nums = Array.from({
    length: 10
  }, (_, i) => String.fromCharCode("0".charCodeAt(0) + i));
  const alphabets = Array.from({
    length: 26
  }, (_, i) => String.fromCharCode("a".charCodeAt(0) + i));
  const chars = [...nums, ...alphabets];
  const rand = length => Math.floor(Math.random() * length);
  return Array.from({
    length: size
  }, () => chars[rand(chars.length)]).join("");
};

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_randID__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/randID */ "./src/components/randID.js");
/* harmony import */ var _components_PuzzleEdit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PuzzleEdit */ "./src/components/PuzzleEdit.js");
/* harmony import */ var _components_ClueEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ClueEdit */ "./src/components/ClueEdit.js");
/* harmony import */ var _components_HintEdit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/HintEdit */ "./src/components/HintEdit.js");
/* harmony import */ var _components_ZoneEdit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ZoneEdit */ "./src/components/ZoneEdit.js");
/* harmony import */ var _components_FlexButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/FlexButtons */ "./src/components/FlexButtons.js");
/* harmony import */ var _components_manageArrayItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/manageArrayItem */ "./src/components/manageArrayItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */







/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */









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

function Edit({
  attributes,
  setAttributes
}) {
  const [gameNameError, setGameNameError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
  const allowedBlocks = ['core/heading', 'core/paragraph'];
  const MY_TEMPLATE = [['core/heading', {
    level: 3,
    placeholder: 'Insert your heading here...'
  }], ['core/paragraph', {
    placeholder: 'Write some description about game here - goals, notes about play area, etc ...'
  }]];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const playZoneObject = {
    "id": "",
    "name": "",
    "description": "",
    "lat": "",
    "long": "",
    "imageID": "",
    "order": "",
    "disabled": "No"
  };
  const puzzleObject = {
    "name": "",
    "description": "",
    "question": "",
    "answer": "",
    "order": "",
    "disabled": "No"
  };
  const clueObject = {
    "name": "",
    "text": "",
    "iconName": "",
    "iconPath": "",
    "imageID": "",
    "order": "",
    "disabled": "No"
  };
  const hintObject = {
    "name": "",
    "text": "",
    "order": "",
    "disabled": "No"
  };
  // When the block loads, set playZones Array if not set or is just using default data
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (attributes.playZones.length === 1 && attributes.playZones[0].id === "1") {
      console.log("playZones.length: " + attributes.playZones.length);
      console.log("playZones id: " + JSON.stringify(attributes.playZones));
      //add object to array
      /* edit zone id */
      //const zoneID = randID(6)
      //setAttributes({playZones: attributes.playZones.concat([{"id": zoneID,"name": "", "description": "", "lat": "", "long": "", "order": ""}])})
      // delete first index of playZone array because it just wasn't editable
      deletePlayZone(0);
    }
  }, []);
  function updateGameName(value) {
    console.log("update game name");
    setAttributes({
      gameName: value
    });
  }
  function updateWalkingDistance(value) {
    console.log("update walking distance");
    setAttributes({
      walkingDistance: value
    });
  }
  function updateUserMustBeLoggedIn(value) {
    console.log("update userMustBeLoggedIn");
    setAttributes({
      userMustBeLoggedIn: value
    });
  }
  function updatePublicMapText(value) {
    console.log("update publicMapText");
    setAttributes({
      publicMapText: value
    });
  }
  function deletePlayZone(indexToDelete) {
    console.log("deletePlayZone");
    const newPlayZones = attributes.playZones.filter(function (x, index) {
      return index != indexToDelete;
    });
    setAttributes({
      playZones: newPlayZones
    });
  }
  function addZoneInit() {
    console.log("addZone!");
    /* check zone id */
    const zoneID = (0,_components_randID__WEBPACK_IMPORTED_MODULE_5__.randID)(6);
    console.log("zoneID: " + zoneID);
    /* check game name */
    if (attributes.gameName === "update game name") {
      /* error */
      setGameNameError("please provide a game name");
    } else {
      /* set first zone */
      let newPlayZoneObject = {
        ...playZoneObject
      };
      newPlayZoneObject.id = zoneID;
      setAttributes({
        playZones: attributes.playZones.concat([newPlayZoneObject])
      });
      /* set gameID */
      let gameIDnew = zoneID + "-" + attributes.gameName.replace(/ /g, "-");
      ;
      setAttributes({
        gameID: gameIDnew
      });
    }
  }
  function addZone() {
    console.log("addZone!");
    /* check zone id */
    const zoneID = (0,_components_randID__WEBPACK_IMPORTED_MODULE_5__.randID)(6);
    console.log("zoneID: " + zoneID);
    let newPlayZoneObject = {
      ...playZoneObject
    };
    newPlayZoneObject.id = zoneID;
    setAttributes({
      playZones: attributes.playZones.concat([newPlayZoneObject])
    });
  }
  function addPuzzleObject(index) {
    console.log("addPuzzle");
    const newArray = attributes.playZones.concat([]);
    const newObject = newArray[index];
    /* check for puzzleArray on object */
    if (Object.hasOwn(newObject, 'puzzleArray')) {
      newObject.puzzleArray.push(puzzleObject);
    } else {
      newObject.puzzleArray = [puzzleObject];
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
    setAttributes({
      playZones: newArray
    });
  }
  function addClueObject(index) {
    console.log("addClue");
    const newArray = attributes.playZones.concat([]);
    const newObject = newArray[index];
    /* check for clueArray on object */
    if (Object.hasOwn(newObject, 'clueArray')) {
      newObject.clueArray.push(clueObject);
    } else {
      newObject.clueArray = [clueObject];
    }
    setAttributes({
      playZones: newArray
    });
  }
  function addHintObject(index) {
    console.log("addHint");
    const newArray = attributes.playZones.concat([]);
    const newObject = newArray[index];
    /* check for clueArray on object */
    if (Object.hasOwn(newObject, 'hintArray')) {
      newObject.hintArray.push(hintObject);
    } else {
      newObject.hintArray = [hintObject];
    }
    setAttributes({
      playZones: newArray
    });
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
    setAttributes({
      playZones: newArray
    });
  }
  function editZoneMedia(media, index) {
    //console.log("editClueMedia: " + JSON.stringify(media));
    const newArray = attributes.playZones.concat([]);
    newArray[index]["imageID"] = media.id;
    newArray[index]["imageURL"] = media.url;
    //console.log("playZones newArray: " + JSON.stringify(newArray));
    setAttributes({
      playZones: newArray
    });
  }
  function removeImage(index) {
    //console.log("editClueMedia: " + JSON.stringify(media));
    const newArray = attributes.playZones.concat([]);
    newArray[index]["imageID"] = "";
    newArray[index]["imageURL"] = "";
    //console.log("playZones newArray: " + JSON.stringify(newArray));
    setAttributes({
      playZones: newArray
    });
  }
  if (attributes.playZones.length > 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "game-block-edit-block",
        style: {
          backgroundColor: attributes.bgColor
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_FlexButtons__WEBPACK_IMPORTED_MODULE_10__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "like-label",
          children: "Game Header and Description:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          style: {
            backgroundColor: "white",
            padding: "10px",
            marginBottom: "10px"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
            allowedBlocks: allowedBlocks,
            template: MY_TEMPLATE,
            templateLock: "all"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
            title: "Background Color",
            initialOpen: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
                color: attributes.bgColor,
                onChange: x => setAttributes({
                  bgColor: x
                }),
                enableAlpha: true,
                defaultValue: "#000"
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: "Game Name:",
          value: attributes.gameName,
          onChange: updateGameName,
          style: {
            fontSize: "20px"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
          label: "User Logged In?",
          selected: attributes.userMustBeLoggedIn,
          options: [{
            label: 'User Must Be Logged in to Play',
            value: "yes"
          }, {
            label: 'Anyone can play, User does not need to log in',
            value: "no"
          }],
          onChange: value => updateUserMustBeLoggedIn(value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: "Walking Distance (estimated total walking distance for player, usually based on zones and how far apart):",
          value: attributes.walkingDistance,
          onChange: updateWalkingDistance,
          style: {
            fontSize: "20px"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: "Public Map (description of what is on public map):",
          value: attributes.publicMapText,
          onChange: updatePublicMapText,
          style: {
            fontSize: "20px"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "item-holder-edit",
          children: attributes.playZones.map(function (playZone, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "zoneDiv",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_ZoneEdit__WEBPACK_IMPORTED_MODULE_9__["default"], {
                playZone: playZone,
                index: index,
                editZoneMedia: editZoneMedia,
                removeImage: removeImage,
                editZone: editZone,
                deletePlayZone: deletePlayZone
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                justify: "flex-start",
                className: "buttons",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    isPrimary: true,
                    onClick: () => {
                      addClueObject(index);
                    },
                    children: "Add Clue"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    isPrimary: true,
                    onClick: () => {
                      addHintObject(index);
                    },
                    children: "Add Hint"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    isPrimary: true,
                    onClick: () => {
                      addPuzzleObject(index);
                    },
                    children: "Add Puzzle"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "item-holder-edit",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_PuzzleEdit__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  puzzleArray: playZone.puzzleArray,
                  index: index,
                  attributes: attributes,
                  setAttributes: setAttributes,
                  playZoneName: playZone.name
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "item-holder-edit",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_ClueEdit__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  clueArray: playZone.clueArray,
                  index: index,
                  attributes: attributes,
                  setAttributes: setAttributes,
                  playZoneName: playZone.name
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "item-holder-edit",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_HintEdit__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  hintArray: playZone.hintArray,
                  index: index,
                  attributes: attributes,
                  setAttributes: setAttributes,
                  playZoneName: playZone.name
                })
              })]
            }, index);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isPrimary: true,
              onClick: () => {
                addZone();
              },
              children: "Add Another Zone"
            })
          })
        })]
      })
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "game-block-edit-block",
        style: {
          backgroundColor: attributes.bgColor
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h4", {
          children: "The first step to creating a game is adding a Zone."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          children: "Zones are areas where people will play. Your Clues and Puzzles should be about things in the Zone area. Typically Zones have a center and the play area is about 100 feet around center. Games can have more than 1 Zone."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "Game Name:",
              value: attributes.gameName,
              onChange: updateGameName,
              style: {
                fontSize: "20px"
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              style: {
                color: 'red'
              },
              children: gameNameError
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isPrimary: true,
              onClick: () => {
                addZoneInit();
              },
              children: "Add A Zone"
            })]
          })
        })]
      })
    });
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */




/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: props => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {});
  }
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["richText"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/escapeout-game","version":"1.1","title":"EscapeOut Game","category":"widgets","attributes":{"gameID":{"type":"string","default":"zoneID_gameName"},"gameName":{"type":"string","default":"update game name"},"map1":{"type":"string","default":""},"walkingDistance":{"type":"string","default":"example: ...this game has 2 zones and the distance between is 100 yards."},"publicMapText":{"type":"string","default":"example: ... the public map only shows the first zone but there are 2 zones"},"zoneText":{"type":"string","default":"Zones are the play area. Clues are usually within 100 feet of Zone Center."},"playZones":{"type":"array","default":[{"id":"1"}]},"bgColor":{"type":"string","default":"#EBEBEB"},"waiverBody":{"type":"string","default":"I WAIVE, RELEASE, AND DISCHARGE from any and all liability for EscapeOut.Games and its parent company (Coastal Initiative, LLC).\\n\\nI certify that I have read this document and I fully understand its content. I am aware that this is a release of liability and a contract and I sign it of my own free will."},"waiverTop":{"type":"string","default":"I will respect all laws, rules, and property rights of the area. I will try not to annoy those around me."},"waiverSigned":{"type":"boolean","default":false},"userMustBeLoggedIn":{"type":"string","default":"yes"}},"icon":"media-interactive","description":"Allows user to create a game","example":{},"supports":{"interactivity":true},"textdomain":"escapeout-game","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScriptModule":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgame_block"] = self["webpackChunkgame_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map