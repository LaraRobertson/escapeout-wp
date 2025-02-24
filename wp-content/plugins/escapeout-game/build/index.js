(()=>{"use strict";var e,a={190:()=>{const e=window.wp.blocks,a=window.wp.blockEditor,l=(window.wp.richText,window.wp.i18n),n=window.wp.components,s=window.React,o=e=>{const a=[...Array.from({length:10},((e,a)=>String.fromCharCode("0".charCodeAt(0)+a))),...Array.from({length:26},((e,a)=>String.fromCharCode("a".charCodeAt(0)+a)))];return Array.from({length:e},(()=>{return a[(e=a.length,Math.floor(Math.random()*e))];var e})).join("")};function i(e,a){let l="";for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);s>=97&&s<=122?s=(s-97+a)%26+97:s>=65&&s<=90&&(s=(s-65+a)%26+65),l+=String.fromCharCode(s)}return l}function t(e,a,l,n,s,o,t,r){const d=t.playZones.concat([]);switch(e){case"puzzle":console.log("shift: "+t.shift);let e=t.shift;if(0===e&&(e=Math.floor(100*Math.random())+1,console.log("set shift: "+e),r({shift:e})),"answer"===a){const a=d[n].puzzleArray[s].sols,t=d[n].puzzleArray[s].answer;i(l,Number(e)),t[o]=l,a[o]=i(l,Number(e))}else"addAnswer"===a?(d[n].puzzleArray[s].sols.push(""),d[n].puzzleArray[s].answer.push("")):d[n].puzzleArray[s][a]=l;break;case"clue":if(d[n].clueArray[s][a]=l,"iconName"===a){const e="/wp-content/plugins/escapeout-game/assets/"+l;d[n].clueArray[s].iconPath=e}break;case"hint":d[n].hintArray[s][a]=l}r({playZones:d})}function r(e,a,l,n,s,o){const i=s.playZones.concat([]),t=a.filter((function(e,a){return a!=n}));switch(e){case"puzzle":console.log("delete puzzle"),0===t.length?delete i[l].puzzleArray:i[l].puzzleArray=t;break;case"clue":console.log("delete clue"),0===t.length?delete i[l].clueArray:i[l].clueArray=t;break;case"hint":console.log("delete hint"),0===t.length?delete i[l].hintArray:i[l].hintArray=t}o({playZones:i})}const d=window.ReactJSXRuntime;function c({puzzleArray:e,index:a,attributes:l,setAttributes:s,playZoneName:o}){return void 0!==e?(0,d.jsx)(d.Fragment,{children:e?.map((function(i,c){return(0,d.jsxs)("div",{className:"puzzleDiv",children:[(0,d.jsx)("div",{className:"Yes"==i.disabled?"disabled":""}),(0,d.jsxs)("div",{className:"item-title-edit",children:["Puzzles ",c+1," (zone name: ",o,"):"]}),(0,d.jsxs)(n.Flex,{className:"puzzle-flex",children:[(0,d.jsxs)(n.FlexBlock,{children:[(0,d.jsx)(n.TextControl,{label:"Puzzle Name",autoFocus:null==i.name,value:i.name,onChange:e=>{t("puzzle","name",e,a,c,"",l,s)}}),(0,d.jsx)(n.TextControl,{label:"Puzzle Description",autoFocus:null==i.description,value:i.description,onChange:e=>{t("puzzle","description",e,a,c,"",l,s)}}),(0,d.jsx)(n.TextControl,{label:"Puzzle Question",autoFocus:null==i.question,value:i.question,onChange:e=>{t("puzzle","question",e,a,c,"",l,s)}})]}),(0,d.jsxs)(n.FlexBlock,{children:[i.answer.map((function(e,o){return(0,d.jsx)(n.TextControl,{label:"answer "+(o+1),autoFocus:null==e,value:e,onChange:e=>{t("puzzle","answer",e,a,c,o,l,s)}})})),i.sols.map((function(e,a){return(0,d.jsxs)("div",{className:"small",children:["encrypted answer ",a,": ",e]})})),(0,d.jsx)(n.Button,{isPrimary:!0,onClick:()=>{t("puzzle","addAnswer","",a,c,"",l,s)},children:"Add Another Answer"})]}),(0,d.jsxs)(n.Flex,{direction:"column",children:[(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.RadioControl,{selected:i.disabled,options:[{label:"Live",value:"No"},{label:"Disabled",value:"Yes"}],onChange:e=>{t("puzzle","disabled",e,a,c,"",l,s)}})}),(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.TextControl,{label:"Order",style:{width:"50px"},type:"number",autoFocus:null==i.order,value:i.order,onChange:e=>{t("puzzle","order",e,a,c,"",l,s)}})}),(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.Button,{isLink:!0,className:"attention-delete",onClick:()=>r("puzzle",e,a,c,l,s),children:"Delete"})})]})]})]},c)}))}):(0,d.jsx)("div",{children:"no puzzles"})}function h({iconPath:e}){const a=window.my_data.siteUrl+e+".svg";return""!==e?(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:a})}):(0,d.jsx)("div",{children:"icon not set"})}function u({clueArray:e,index:s,attributes:o,setAttributes:i,playZoneName:c}){const u=["image"];return void 0!==e?(0,d.jsx)(d.Fragment,{children:e?.map((function(x,m){return(0,d.jsxs)("div",{className:"clueDiv",children:[(0,d.jsx)("div",{className:"Yes"==x.disabled?"disabled":""}),(0,d.jsxs)("div",{className:"item-title-edit",children:["Clues ",m+1," (zone name:  ",c,"):"]}),(0,d.jsxs)(n.Flex,{children:[(0,d.jsxs)(n.FlexBlock,{children:[(0,d.jsx)(n.TextControl,{label:"Clue Name",autoFocus:null==x.name,value:x.name,onChange:e=>{t("clue","name",e,s,m,"",o,i)}}),(0,d.jsx)(n.TextControl,{label:"Clue Text",autoFocus:null==x.text,value:x.text,onChange:e=>{t("clue","text",e,s,m,"",o,i)}}),(0,d.jsx)(n.SelectControl,{label:"Icon",value:x.iconName,options:[{label:"choose icon",value:""},{label:"magnifying glass",value:"magnifying-glass"},{label:"torn paper",value:"torn-paper"},{label:"envelope",value:"envelope"},{label:"message in a bottle",value:"message-in-a-bottle"},{label:"note question",value:"note-question"},{label:"diary",value:"diary"}],onChange:e=>{t("clue","iconName",e,s,m,"",o,i)},__nextHasNoMarginBottom:!0}),(0,d.jsx)("div",{children:(0,d.jsx)(h,{iconPath:x.iconPath})})]}),(0,d.jsx)(n.FlexBlock,{children:(0,d.jsx)(a.MediaUploadCheck,{children:(0,d.jsx)(a.MediaUpload,{onSelect:e=>{!function(e,a,l,n,s){const o=n.playZones.concat([]);o[a].clueArray[l].imageID=e.id,o[a].clueArray[l].imageURL=e.url,s({playZones:o})}(e,s,m,o,i)},title:(0,l.__)("Clue Image","game-block"),allowedTypes:u,multiple:!1,value:x.imageID,render:({open:e})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.Button,{className:"button",onClick:e,children:"Open Media Library"}),x.imageURL&&(0,d.jsx)("img",{src:x.imageURL,alt:(0,l.__)("Clue Image","game-block"),style:{display:"block",maxWidth:"250px",height:"auto"}})]})})})}),(0,d.jsxs)(n.Flex,{direction:"column",children:[(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.RadioControl,{selected:x.disabled,options:[{label:"Live",value:"No"},{label:"Disabled",value:"Yes"}],onChange:e=>{t("clue","disabled",e,s,m,"",o,i)}})}),(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.TextControl,{label:"Order",style:{width:"50px"},type:"number",autoFocus:null==x.order,value:x.order,onChange:e=>{t("clue","order",e,s,m,"",o,i)}})}),(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.Button,{isLink:!0,className:"attention-delete",onClick:()=>r("clue",e,s,m,o,i),children:"Delete"})})]})]})]},m)}))}):(0,d.jsx)("div",{children:"no clues"})}function x({hintArray:e,index:a,attributes:l,setAttributes:s,playZoneName:o}){return void 0!==e?(0,d.jsx)(d.Fragment,{children:e?.map((function(i,c){return(0,d.jsxs)("div",{className:"puzzleDiv",children:[(0,d.jsx)("div",{className:"Yes"==i.disabled?"disabled":""}),(0,d.jsxs)("div",{className:"item-title-edit",children:["Hints ",c+1," (zone name: ",o,"):"]}),(0,d.jsxs)(n.Flex,{children:[(0,d.jsxs)(n.FlexBlock,{children:[(0,d.jsx)(n.TextControl,{label:"Hint Name",autoFocus:null==i.name,value:i.name,onChange:e=>{t("hint","name",e,a,c,"",l,s)}}),(0,d.jsx)(n.TextControl,{label:"Hint Text",autoFocus:null==i.text,value:i.text,onChange:e=>{t("hint","text",e,a,c,"",l,s)}})]}),(0,d.jsxs)(n.Flex,{direction:"column",children:[(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.RadioControl,{selected:i.disabled,options:[{label:"Live",value:"No"},{label:"Disabled",value:"Yes"}],onChange:e=>{t("hint","disabled",e,a,c,"",l,s)}})}),(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.TextControl,{label:"Order",style:{width:"50px"},type:"number",autoFocus:null==i.order,value:i.order,onChange:e=>{t("hint","order",e,a,c,"",l,s)}})}),(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.Button,{isLink:!0,className:"attention-delete",onClick:()=>r("hint",e,a,c,l,s),children:"Delete"})})]})]})]},c)}))}):(0,d.jsx)("div",{children:"no hints"})}const m=window.wp.data;function p({imageId:e,size:a="thumbnail"}){const{image:l}=(0,m.useSelect)((a=>({image:a("core").getMedia(e)})));return(0,d.jsx)(d.Fragment,{children:l&&(0,d.jsx)("img",{...(()=>{let e={src:l.source_url,alt:l.alt_text,className:`attachment-${a} size-${a}`,width:l.media_details.width,height:l.media_details.height};return l.media_details&&l.media_details.sizes&&l.media_details.sizes[a]&&(e.src=l.media_details.sizes[a].source_url,e.width=l.media_details.sizes[a].width,e.height=l.media_details.sizes[a].height),e})()})})}function g({playZone:e,index:s,editZoneMedia:o,removeImage:i,editZone:t,deletePlayZone:r}){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"Yes"==e.disabled?"disabled":""}),(0,d.jsxs)("div",{className:"item-title-edit",children:["Zones ",s+1,":"]}),(0,d.jsxs)(n.Flex,{children:[(0,d.jsxs)("div",{className:"flexBlock200",children:[(0,d.jsx)(n.TextControl,{label:"Zone Name",autoFocus:null==e.name,value:e.name,onChange:e=>{t("name",e,s)}}),(0,d.jsx)(n.TextControl,{label:"Zone Description",autoFocus:null==e.description,value:e.description,onChange:e=>{t("description",e,s)}}),(0,d.jsx)(n.TextControl,{label:"Latitude",className:"hide",autoFocus:null==e.lat,value:e.lat,onChange:e=>{t("lat",e,s)}}),(0,d.jsx)(n.TextControl,{label:"Longitude",className:"hide",autoFocus:null==e.long,value:e.long,onChange:e=>{t("long",e,s)}})]}),(0,d.jsx)(n.FlexItem,{children:(0,d.jsxs)("div",{className:"mediaColumn",children:[(0,d.jsx)(a.MediaUploadCheck,{children:(0,d.jsx)(a.MediaUpload,{onSelect:e=>{o(e,s)},title:(0,l.__)("Zone Image","game-block"),allowedTypes:["image"],multiple:!1,value:e.imageID,render:({open:a})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.Button,{className:"button",onClick:a,children:"Open Media Library"}),(0,d.jsx)(p,{imageId:e.imageID})]})})}),(0,d.jsx)(n.Button,{className:""===e.imageID?"hide":"button show",onClick:()=>i(s),children:"Remove Image"})]})}),(0,d.jsxs)(n.FlexItem,{children:[(0,d.jsx)(n.RadioControl,{selected:e.disabled,options:[{label:"Live",value:"No"},{label:"Disabled",value:"Yes"}],onChange:e=>{t("disabled",e,s)}}),(0,d.jsx)(n.TextControl,{label:"Order",style:{width:"50px"},type:"number",autoFocus:null==e.order,value:e.order,onChange:e=>{t("order",e,s)}}),(0,d.jsx)(n.Button,{isLink:!0,className:"attention-delete",onClick:()=>r(s),children:"Delete"})]})]})]})}function j({attributes:e,setAttributes:a}){const[l,o]=(0,s.useState)(!1),[i,t]=(0,s.useState)(!1),[r,c]=(0,s.useState)(!1),[h,u]=(0,s.useState)(!1),[x,m]=(0,s.useState)(!1),[p,g]=(0,s.useState)(!1),[j,v]=(0,s.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex-button",children:[(0,d.jsxs)(n.Button,{isPrimary:!0,onClick:()=>{t(!i)},children:[(0,d.jsx)("div",{className:i?"hide":"show",children:"Show Help for Game Design"}),(0,d.jsx)("div",{className:i?"show":"hide",children:"Close Help for Game Design"})]}),(0,d.jsxs)(n.Button,{isPrimary:!0,onClick:()=>{g(!p)},children:[(0,d.jsx)("div",{className:p?"hide":"show",children:"Show in-Game Help Fields"}),(0,d.jsx)("div",{className:p?"show":"hide",children:"Close in-Game Help Fields"})]}),(0,d.jsxs)(n.Button,{isPrimary:!0,onClick:()=>{v(!j)},children:[(0,d.jsx)("div",{className:j?"hide":"show",children:"Show Waiver"}),(0,d.jsx)("div",{className:j?"show":"hide",children:"Close Waiver"})]}),(0,d.jsxs)(n.Button,{isPrimary:!0,onClick:()=>{c(!r)},children:[(0,d.jsx)("div",{className:r?"hide":"show",children:"Show Public/Private Map"}),(0,d.jsx)("div",{className:r?"show":"hide",children:"Close Public/Private Map"})]})]}),(0,d.jsxs)("div",{className:i?"show":"hide",children:["HOW TO CREATE A GAME:",(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Do Not Publish Game for public until you are done testing. Create a private page with a password."}),(0,d.jsx)("li",{children:"Games are based on Zones. Create a Zone and then create clues, puzzles, and hints"}),(0,d.jsx)("li",{children:"Zones are area with a radius of about 100 feet. Let the player know the center of the zone AND/OR if it does not have a diameter of 100feet (if you change this, change help text for zones, in-Game Help Field)."}),(0,d.jsx)("li",{children:"Each game has a waiver - default text provided (you can change)"}),(0,d.jsx)("li",{children:"Each game has a help area for player - default text provided (you can change)"}),(0,d.jsx)("li",{children:"You can change color of background of game - see tool on right"}),(0,d.jsx)("li",{children:"Provide a header and description for each game."}),(0,d.jsx)("li",{children:"Provide a Walking Distance for each game - estimated total walking distance for player, usually based on zones and how far apart."})]})]}),(0,d.jsx)("div",{className:p?"show":"hide",children:(0,d.jsx)("div",{className:"text-area-container",id:"zone-help-text",children:(0,d.jsx)(n.TextareaControl,{label:"Zone Help Text':",value:e.zoneText,onChange:function(e){console.log("update zone text"),a({zoneText:e})},style:{fontSize:"15px"}})})}),(0,d.jsx)("div",{className:j?"show":"hide",children:(0,d.jsxs)("div",{className:"text-area-container",children:[(0,d.jsx)(n.TextareaControl,{label:"Waiver Top:",value:e.waiverTop,onChange:function(e){console.log("update waiver top"),a({waiverTop:e})},style:{fontSize:"15px"}}),(0,d.jsx)(n.TextareaControl,{label:"Waiver Body':",value:e.waiverBody,onChange:function(e){console.log("update waiver body"),a({waiverBody:e})},style:{fontSize:"15px"}}),(0,d.jsxs)(n.Button,{isPrimary:!0,onClick:()=>{o(!l)},children:[(0,d.jsx)("div",{className:l?"hide":"show",children:"View Waiver Text"}),(0,d.jsx)("div",{className:l?"show":"hide",children:"Close Waiver Text"})]}),(0,d.jsxs)("div",{className:l?"waiver-container show":"hide",children:[(0,d.jsx)("div",{className:"waiver-top",children:e.waiverTop}),(0,d.jsx)("div",{className:"waiver-body",children:e.waiverBody})]})]})}),(0,d.jsxs)("div",{className:r?"show flex-button-area":"hide",children:[(0,d.jsx)("header",{class:"modal_header",children:"Public Map"}),(0,d.jsx)("div",{className:"small",children:'Get Map src for iframe using "create map" at https://mymaps.google.com and look at "Embed this map" code, suggest base map as "simple atlas".'}),(0,d.jsxs)("div",{className:"text-area-container",children:[(0,d.jsx)(n.TextControl,{label:"Public Map Src for iframe (if no src code, no map):",value:e.map1,onChange:function(e){console.log("update map 1"),a({map1:e})},style:{fontSize:"15px"}}),(0,d.jsx)(n.TextControl,{label:"Public Map Explanation (description of what is on public map):",value:e.publicMapText,onChange:function(e){console.log("update publicMapText"),a({publicMapText:e})},style:{fontSize:"20px"}})]}),(0,d.jsx)("header",{class:"modal_header",children:"Private/Zone Map"}),(0,d.jsxs)("div",{className:"text-area-container",children:[(0,d.jsx)(n.TextControl,{label:"Private/Zone Map Src for iframe (if no src code, no map):",value:e.map2,onChange:function(e){console.log("update map 2"),a({map2:e})},style:{fontSize:"15px"}}),(0,d.jsxs)("div",{className:"flex-button",children:[(0,d.jsxs)(n.Button,{isPrimary:!0,className:""===e.map2?"hide":"show",onClick:()=>{m(!x)},children:[(0,d.jsx)("div",{className:x?"hide":"show",children:"View Private/Zone Map"}),(0,d.jsx)("div",{className:x?"show":"hide",children:"Close Private/Zone Map"})]}),(0,d.jsxs)(n.Button,{isPrimary:!0,className:""===e.map1?"hide":"show",onClick:()=>{u(!h)},children:[(0,d.jsx)("div",{className:h?"hide":"show",children:"View Public Map"}),(0,d.jsx)("div",{className:h?"show":"hide",children:"Close Public Map"})]})]})]})]}),(0,d.jsx)("div",{className:h?"showmodal modalContainerMap":"hide modalContainerMap",children:(0,d.jsxs)("div",{class:"modal from-right",children:[(0,d.jsx)("header",{class:"modal_header",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Public Map"})," ",(0,d.jsx)("span",{class:"small",children:"(click on right arrow or icons for zone name(s))"})]})}),(0,d.jsx)("main",{class:"modal_content",children:(0,d.jsx)("iframe",{src:e.map1,width:"100%",height:"400px"})}),(0,d.jsx)("footer",{class:"modal_footer",children:(0,d.jsx)(n.Button,{isPrimary:!0,onClick:()=>{u(!h)},children:(0,d.jsx)("div",{children:"Close Public Map"})})})]})}),(0,d.jsx)("div",{className:x?"showmodal modalContainerMap":"hide modalContainerMap",children:(0,d.jsxs)("div",{class:"modal from-right",children:[(0,d.jsx)("header",{class:"modal_header",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Private/Zone Map"})," ",(0,d.jsx)("span",{class:"small",children:"(click on right arrow or icons for zone name(s))"})]})}),(0,d.jsx)("main",{class:"modal_content",children:(0,d.jsx)("iframe",{src:e.map2,width:"100%",height:"400px"})}),(0,d.jsx)("footer",{class:"modal_footer",children:(0,d.jsx)(n.Button,{isPrimary:!0,onClick:()=>{m(!x)},children:(0,d.jsx)("div",{children:"Close Private/Zone Map"})})})]})})]})}const v=JSON.parse('{"UU":"create-block/escapeout-game"}');(0,e.registerBlockType)(v.UU,{edit:function({attributes:e,setAttributes:l}){const[i,t]=(0,s.useState)(""),r=(0,a.useBlockProps)(),h={id:"",name:"",description:"",lat:"",long:"",imageID:"",order:"",disabled:"No"},m={name:"",description:"",question:"",sols:[""],answer:[""],order:"",disabled:"No"},p={name:"",text:"",iconName:"",iconPath:"",imageID:"",order:"",disabled:"No"},v={name:"",text:"",order:"",disabled:"No"};function b(e){console.log("update game name"),l({gameName:e})}function y(a){console.log("deletePlayZone");const n=e.playZones.filter((function(e,l){return l!=a}));l({playZones:n})}function C(a,n,s){const o=e.playZones.concat([]);o[s][a]=n,console.log("playZones newArray: "+JSON.stringify(o)),l({playZones:o})}function f(a,n){const s=e.playZones.concat([]);s[n].imageID=a.id,s[n].imageURL=a.url,l({playZones:s})}function w(a){const n=e.playZones.concat([]);n[a].imageID="",n[a].imageURL="",l({playZones:n})}return(0,s.useEffect)((()=>{1===e.playZones.length&&"1"===e.playZones[0].id&&(console.log("playZones.length: "+e.playZones.length),console.log("playZones id: "+JSON.stringify(e.playZones)),y(0))}),[]),e.playZones.length>0?(0,d.jsx)("div",{...r,children:(0,d.jsxs)("div",{className:"game-block-edit-block",style:{backgroundColor:e.bgColor},children:[(0,d.jsx)(j,{attributes:e,setAttributes:l}),(0,d.jsx)("div",{className:"like-label",children:"Game Header and Description:"}),(0,d.jsx)("div",{style:{backgroundColor:"white",padding:"10px",marginBottom:"10px"},children:(0,d.jsx)(a.InnerBlocks,{allowedBlocks:["core/heading","core/paragraph"],template:[["core/heading",{level:3,placeholder:"Insert your heading here..."}],["core/paragraph",{placeholder:"Write some description about game here - goals, notes about play area, etc ..."}]],templateLock:"all"})}),(0,d.jsx)(a.BlockControls,{}),(0,d.jsxs)(a.InspectorControls,{children:[(0,d.jsx)(n.PanelBody,{title:"Background Color",initialOpen:!0,children:(0,d.jsx)(n.PanelRow,{children:(0,d.jsx)(n.ColorPicker,{color:e.bgColor,onChange:e=>l({bgColor:e}),enableAlpha:!0,defaultValue:"#000"})})}),(0,d.jsx)(n.PanelBody,{title:"Text Color",initialOpen:!0,children:(0,d.jsx)(n.PanelRow,{children:(0,d.jsx)(n.ColorPicker,{color:e.textColor,onChange:e=>l({textColor:e}),enableAlpha:!0,defaultValue:"#000"})})})]}),(0,d.jsx)(n.TextControl,{label:"Game Name:",value:e.gameName,onChange:b,style:{fontSize:"20px"}}),(0,d.jsx)(n.RadioControl,{label:"User Logged In?",selected:e.userMustBeLoggedIn,options:[{label:"User Must Be Logged in to Play",value:"yes"},{label:"Anyone can play, User does not need to log in",value:"no"}],onChange:e=>function(e){console.log("update userMustBeLoggedIn"),l({userMustBeLoggedIn:e})}(e)}),(0,d.jsx)(n.TextControl,{label:"Walking Distance Explanation (estimated total walking distance for player, usually based on zones and how far apart):",value:e.walkingDistance,onChange:function(e){console.log("update walking distance"),l({walkingDistance:e})},style:{fontSize:"20px"}}),(0,d.jsx)("div",{className:"item-holder-edit",children:e.playZones.map((function(a,s){return(0,d.jsxs)("div",{className:"zoneDiv",children:[(0,d.jsx)(g,{playZone:a,index:s,editZoneMedia:f,removeImage:w,editZone:C,deletePlayZone:y}),(0,d.jsxs)(n.Flex,{justify:"flex-start",className:"buttons",children:[(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.Button,{isPrimary:!0,onClick:()=>{!function(a){console.log("addClue");const n=e.playZones.concat([]),s=n[a];Object.hasOwn(s,"clueArray")?s.clueArray.push(p):s.clueArray=[p],l({playZones:n})}(s)},children:"Add Clue"})}),(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.Button,{isPrimary:!0,onClick:()=>{!function(a){console.log("addHint");const n=e.playZones.concat([]),s=n[a];Object.hasOwn(s,"hintArray")?s.hintArray.push(v):s.hintArray=[v],l({playZones:n})}(s)},children:"Add Hint"})}),(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.Button,{isPrimary:!0,onClick:()=>{!function(a){console.log("addPuzzle");const n=e.playZones.concat([]),s=n[a];Object.hasOwn(s,"puzzleArray")?s.puzzleArray.push(m):s.puzzleArray=[m],l({playZones:n})}(s)},children:"Add Puzzle"})})]}),(0,d.jsx)("div",{className:"item-holder-edit",children:(0,d.jsx)(c,{puzzleArray:a.puzzleArray,index:s,attributes:e,setAttributes:l,playZoneName:a.name})}),(0,d.jsx)("div",{className:"item-holder-edit",children:(0,d.jsx)(u,{clueArray:a.clueArray,index:s,attributes:e,setAttributes:l,playZoneName:a.name})}),(0,d.jsx)("div",{className:"item-holder-edit",children:(0,d.jsx)(x,{hintArray:a.hintArray,index:s,attributes:e,setAttributes:l,playZoneName:a.name})})]},s)}))}),(0,d.jsx)(n.Flex,{children:(0,d.jsx)(n.FlexItem,{children:(0,d.jsx)(n.Button,{isPrimary:!0,onClick:()=>{!function(){console.log("addZone!");const a=o(6);console.log("zoneID: "+a);let n={...h};n.id=a,l({playZones:e.playZones.concat([n])})}()},children:"Add Another Zone"})})})]})}):(0,d.jsx)("div",{...r,children:(0,d.jsxs)("div",{className:"game-block-edit-block",style:{backgroundColor:e.bgColor},children:[(0,d.jsx)("h4",{children:"The first step to creating a game is adding a Zone."}),(0,d.jsx)("div",{children:"Zones are areas where people will play. Your Clues and Puzzles should be about things in the Zone area. Typically Zones have a center and the play area is about 100 feet around center. Games can have more than 1 Zone."}),(0,d.jsx)("br",{}),(0,d.jsx)(n.Flex,{children:(0,d.jsxs)(n.FlexItem,{children:[(0,d.jsx)(n.TextControl,{label:"Game Name:",value:e.gameName,onChange:b,style:{fontSize:"20px"}}),(0,d.jsx)("div",{style:{color:"red"},children:i}),(0,d.jsx)(n.Button,{isPrimary:!0,onClick:()=>{!function(){console.log("addZone!");const a=o(6);if(console.log("zoneID: "+a),"update game name"===e.gameName)t("please provide a game name");else{let n={...h};n.id=a,l({playZones:e.playZones.concat([n])});let s=a+"-"+e.gameName.replace(/ /g,"-");l({gameID:s})}}()},children:"Add A Zone"})]})})]})})},save:e=>(0,d.jsx)(a.InnerBlocks.Content,{})})}},l={};function n(e){var s=l[e];if(void 0!==s)return s.exports;var o=l[e]={exports:{}};return a[e](o,o.exports,n),o.exports}n.m=a,e=[],n.O=(a,l,s,o)=>{if(!l){var i=1/0;for(c=0;c<e.length;c++){l=e[c][0],s=e[c][1],o=e[c][2];for(var t=!0,r=0;r<l.length;r++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](l[r])))?l.splice(r--,1):(t=!1,o<i&&(i=o));if(t){e.splice(c--,1);var d=s();void 0!==d&&(a=d)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,s,o]},n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={57:0,350:0};n.O.j=a=>0===e[a];var a=(a,l)=>{var s,o,i=l[0],t=l[1],r=l[2],d=0;if(i.some((a=>0!==e[a]))){for(s in t)n.o(t,s)&&(n.m[s]=t[s]);if(r)var c=r(n)}for(a&&a(l);d<i.length;d++)o=i[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},l=self.webpackChunkgame_block=self.webpackChunkgame_block||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))})();var s=n.O(void 0,[350],(()=>n(190)));s=n.O(s)})();