/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';
import {
	RegExpMatcher,
	TextCensor,
	englishDataset,
	englishRecommendedTransformers,
} from 'obscenity';
import { format } from 'date-fns'
import {shallowEqual} from "./components/ShallowEqual";
import {removeLocalStorage} from "./components/helper";


const matcher = new RegExpMatcher({
	...englishDataset.build(),
	...englishRecommendedTransformers,
});

/* Basic + space + base64 encode application username:password for user who created? */
const saveScore = async (gameScoreID) => {
	console.log("saveScore");
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Authorization", "Basic bGFyYTo0bFJYIEMydTUgaWd3YSBja0dYIGoyRHYgaldMcg==");

	/* generate all variables - timeEnd, totalTime, firstTime, completed */
	// Do your operations to calculate time
	let endDate   = new Date().getTime();
	let minutes = (endDate - state.timeStart) / 60000;
	let totalTime = Number(minutes + state.hintTime).toFixed(2);
	console.log("totalTime: " + totalTime);
	state.gameScore = totalTime;
	state.showGameScore = true;
	const context = getContext();
	if (context.userMustBeLoggedIn) {
		/* hintTime is a state variable */
		const raw = JSON.stringify({
			"timeEnd": endDate,
			"totalTime": totalTime,
			"hintTime": state.hintTime,
			"completed": 'yes',
		});
		console.log("raw (put-saveScore)" + raw);

		const requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};
		const url = state.siteURL + "/wp-json/escapeout/v1/game-score/" + gameScoreID;
		try {
			const response = await fetch(url, requestOptions)
			if (!response.ok) {
				console.error('Request failed with status ' + response.status)
			}
		} catch (error) {
			console.error('Error:', error.message)
		}
	}


	/* apiFetch doesn't seem to work
	const success = apiFetch( {
		path: '/game-plugin-app-api/v1/game-user',
		method: 'POST',
		data: {
			"name": "John Doe2",
			"email": "jon@gmail.com2"
		},
	} ).then( ( res ) => {
		console.log( res );
	} );*/
};
const getScoreByID = async ({postID, userID, realTimeStart}) => {
}

const createScore = async ({postID, userID, gameID, gameName, userEmail, designerEmail, designerName, timeStart, formattedDate, teamName}) => {
	/* note - can only update fields that you created, probably because of authorization... */
	const context = getContext();
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Access-Control-Allow-Headers", "Authorization, X-WP-Nonce, Content-Disposition, Content-MD5, Content-Type");
	myHeaders.append("Access-Control-Expose-Headers","X-WP-Total, X-WP-TotalPages, Link");
	myHeaders.append( "Authorization", "Bearer " + btoa( 'lara:4lRX C2u5 igwa ckGX j2Dv jWLr' ));
	myHeaders.append( "Vary", "Origin" );
	//myHeaders.append('X-WP-Nonce', nonce);
	/* check if first time */
	const requestOptions = {
		method: "GET",
		headers: myHeaders,
		credentials: "include"
	};
	const url = state.siteURL + "/wp-json/escapeout/v1/game-score/?userEmail=" + userEmail + "&gameID=" + gameID;
	try {
		const response = await fetch(url, requestOptions)
		if (!response.ok) {
			console.error('url Request failed with status ' + response.status)
		}
		const data = await response.json();
		console.log('get userEmail/gameID: data.length: ' + data.length);
		state.firstTime = "yes";
		if (data.length>0) {state.firstTime = "no";}
		/* create score */
		const raw = JSON.stringify({
			"postID": postID,
			"userID": userID,
			"gameID": gameID,
			"gameName": gameName,
			"userEmail": userEmail,
			"designerEmail": designerEmail,
			"designerName": designerName,
			"timeStart": timeStart,
			"formattedDate": formattedDate,
			"teamName": teamName,
			"firstTime": state.firstTime
		});
		const requestOptions2 = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			credentials: "include"
		};
		const url2 = state.siteURL + "/wp-json/escapeout/v1/game-score/";
		try {
			const response = await fetch(url2, requestOptions2)
			if (!response.ok) {
				console.error('url2 Request failed with status ' + response.status)
				/* stop here */
			}
			/* get ID */
			const requestOptions3 = {
				method: "GET",
				headers: myHeaders,
				credentials: "include"
			};
			const url3 = state.siteURL + "/wp-json/escapeout/v1/game-score/?userEmail=" + userEmail + "&gameID=" + gameID + "&timeStart=" + timeStart;
			try {
				const response = await fetch(url3, requestOptions3)
				if (!response.ok) {
					console.error('url3 Request failed with status ' + response.status)
				}
				const data2 = await response.json();
				/*data is an array */
				console.log("data2: " + JSON.stringify(data2));
				if (data2.length>0) {
					state.gameScoreID = data2[0].id;
					localStorage.setItem("gameScoreID",data2[0].id);
					localStorage.setItem("gameName",gameName);
					localStorage.setItem("timeStart", timeStart);
					localStorage.setItem("gameID", gameID);
					context.gameStart = true;
				}
			} catch (error) {
				console.error('Error3 (get gameScoreID):', error.message)
			}

		} catch (error) {
			console.error('Error2 (post create score):', error.message)
		}

	} catch (error) {
		console.error('Error1:', error.message)
	}


	/* apiFetch doesn't seem to work
	const success = apiFetch( {
		path: '/game-plugin-app-api/v1/game-user',
		method: 'POST',
		data: {
			"name": "John Doe2",
			"email": "jon@gmail.com2"
		},
	} ).then( ( res ) => {
		console.log( res );
	} );*/
};

const { state } = store( 'create-block', {
	state: {
		get themeText() {
			return state.isDark ? state.darkText : state.lightText;
		},
	},
	actions: {
		hintWarningOpen() {
			state.hintWarningVisible = true
		},
		hintWarningClose() {
			state.hintWarningVisible = false
		},
		saveTextArea: () => {
			const input = document.getElementById("textArea").value;
			console.log("textAreaInput" + input);
		},
		setHintDisplayOn: () => {
			const context = getContext();
			if (context.hintUsed === true) {
				context.hintDisplayOn = true;
			} else {
				state.hintWarningVisible = true;
			}

		},
		openHint: () => {
			const context = getContext();
			context.hintUsed = true;
			state.hintWarningVisible = false;
			context.hintDisplayOn = true;
			/* add hint time */
			state.hintTime = state.hintTime + 5;
		},
		quitWarningClose: () => {
			state.hintID = '';
			state.hintWarningVisible = false;
		},
		setHintDisplayToggle: () => {
			const context = getContext();
			context.hintDisplayOn = ! context.hintDisplayOn;
		},
		setClueDisplayToggle: () => {
			const context = getContext();
			context.clueDisplayOn = ! context.clueDisplayOn;
		},
		checkClueDisplayOn: () => {
			const context = getContext();
			if (state.clueDisplayOn = context.clueID) {
				return true
			} else {
				return false
			}
		},
		setZoneVisible: () => {
			const context = getContext();
			state.zoneID = context.id;
			console.log("context.description:" + context.description);
			if (context.description == "") {
				state.zoneDescription = " ";
			} else {
				state.zoneDescription = context.description;
			}
		},
		setPuzzleModalVisible: () => {
			const context = getContext();
			context.modalOpen = true;
			console.log("context.modalOpen: " + context.modalOpen);
		},
		setPuzzleModalHidden: () => {
			const context = getContext();
			console.log("close puzzle modal");
			context.modalOpen = false;
			console.log("context.modalOpen: " + context.modalOpen);
		},
		closeHelp: () => {
			state.zoneHelpVisible = false;
			state.teamHelpVisible = false;
			state.helpVisible = false;
		},
		setZoneHelpVisible: () => {
			state.zoneHelpVisible = true;
			state.helpVisible = true;
		},
		setTeamHelpVisible: () => {
			state.teamHelpVisible = true;
			state.helpVisible = true;
		},
		togglePublicMap() {
			state.modalPublicMapOpen = !state.modalPublicMapOpen;
		},
		togglePublicImage() {
			state.modalPublicImageOpen = !state.modalPublicImageOpen;
		},
		toggleStats() {
			state.modalStatsOpen = !state.modalStatsOpen;
		},
		toggleLeaderBoard() {

			state.modalLeaderBoardOpen = !state.modalLeaderBoardOpen;
		},
		guessAttempt: () => {
			const context = getContext();
			if (!context.solved) {
				const input = document.getElementById(context.puzzleID).value;
				context.guess = input;
				console.log("guess: " + context.guess);
				console.log("answer: " + context.answer);
				let val = shallowEqual(context.guess, context.answer);
				console.log("val: " + val);
				if (val) {
					state.solvedCount++;
					console.log(state);
					context.solved = true;
					context.timeEnd = Date();
					setTimeout(() => {
						context.modalOpen = false
					}, 1600);
					/* check if finished */
					if (state.solvedCount === state.puzzleTotal) {
						state.alertVisible = true
						state.alertText = "Winner"
						/* send to database */

						saveScore(state.gameScoreID);

						setTimeout(() => {
							removeLocalStorage();
							context.gameStart = false;
						}, 1600);
					}
				} else {
					context.showSorry = true;
					setTimeout(() => {
						context.showSorry = false
					}, 1600);
				}
			}},
		toggleOpen() {
			const context = getContext();
			context.isOpen = ! context.isOpen;
		},
		quitAlertOpen() {
			state.quitVisible = true
		},
		quitAlertClose() {
			state.quitVisible = false
		},
		quitAlertStartClose() {
			state.alertStartVisible = false
		},
		quit() {
			const context = getContext();
			removeLocalStorage();
			window.location.reload();
			window.scrollTo(0, 0);
		},
		showWaiverToggle() {
			state.showWaiver = ! state.showWaiver;
		},
		signWaiver() {
			const context = getContext();
			context.waiverSigned=true;
		},
		gameStart() {
			const context = getContext();
			if (context.userMustBeLoggedIn) {
				context.teamName = document.getElementById("team-name").value;
			} else {
				context.teamName = document.getElementById("team-name2").value;
			}
			console.log("context.teamName: " + context.teamName);
			console.log("context.gameName: " + context.gameName);
			console.log("context.gameID: " + context.gameID);
			const gameIDLocal = localStorage.getItem("gameID");
			const gameNameLocal = localStorage.getItem("gameName");
			console.log ("localStorage.getItem-gameID: " + gameIDLocal )
			// check if playing another game
			if ( localStorage.getItem("timeStart") && (gameIDLocal !== context.gameID) ) {
				/* let them know they are currently playing a different game */
				state.alertStartVisible = true;
				state.anotherGame = gameNameLocal;
				if (context.gameStart === true) {
					console.log("gameStart: true");
					state.alertText = "You are playing: " + gameNameLocal + ". gameStart is true";
				} else {
					console.log("gameStart: false");
					state.alertText = "You are playing: " + gameNameLocal + ". gameStart is true";
				}
			} else {
				// check waiver
				if (context.waiverSigned === true) {
					//check teamName
					if (context.teamName !== '') {
						console.log("context.teamName (again): " + context.teamName);
						/* check for obscenities */
						if (matcher.hasMatch(context.teamName)) {
							state.errorMessage = "The Team Name contains profanities. Please choose another.";
							context.teamName = "";
						} else {
							state.errorMessage = "";
							/* need teamName in localstorage? */
							//localStorage.setItem("teamName", context.teamName);
							/* this is timeStart */
							const date = new Date().getTime();
							/* ... */
							/* check for other games? */
							state.timeStart = date;
							state.formattedTimeStart = format(date, "MM/dd/yy h:mma");
							/* do this after score is created */
							/*localStorage.setItem("timeStart", date);*/
							/* context.gameStart = true;*/
							state.gameScore = '';
							state.showGameScore = false;
							state.hintTime = 0;
							state.showWaiver = false;
							if (context.userMustBeLoggedIn) {
								createScore({
									postID: context.postID,
									userID: context.userID,
									gameID: context.gameID,
									gameName: context.gameName,
									userEmail: context.userEmail,
									designerEmail: context.designerEmail,
									designerName: context.designerName,
									timeStart: date,
									formattedDate: format(date, "MM/dd/yy h:mma"),
									teamName: context.teamName
								});
							} else {
								localStorage.setItem("gameName",context.gameName);
								localStorage.setItem("timeStart", date);
								localStorage.setItem("gameID", context.gameID);
								context.gameStart = true;
							}
							/* get gameScoreID */
						}
					} else {
						//set errorMessage
						state.errorMessage = "Please choose a Team Name"
					}
				} else {
					state.errorMessage = "You Need to Sign Waiver";
				}
			}
		},
		toggleTheme() {
			state.isDark = ! state.isDark;
		},
		closeGameScore() {
			state.showGameScore = false;
			window.location.reload();
			window.scrollTo(0, 0);
		},
	},
	callbacks: {
		checkPublicMap: () => {
			const context = getContext();
			if (context.map1 !== '') {
				console.log("don't hide map button");
				return false
			} else {
				console.log("hide map button");
				return true
			}
		},
		hideItemByZone: () => {
			const context = getContext();
			console.log("context.zoneID: " + context.zoneID);
			console.log("context.firstZoneID: " + context.firstZoneID);
			console.log("state.zoneID: " + state.zoneID);
			if ((context.zoneID == state.zoneID) || (state.zoneID === '' && context.zoneID === context.firstZoneID)) {
				console.log("don't hide zone");
				return false
			} else {
				console.log("hide zone");
				return true
			}
		},
		hideItemByZoneID: () => {
			const context = getContext();
			//console.log("context.zoneID: " + context.zoneID);
			console.log("context.id: " + context.id);
			console.log("context.firstZoneID: " + context.firstZoneID);
			console.log("state.zoneID: " + state.zoneID);
			if ((context.id == state.zoneID) || (state.zoneID === '' && context.id === context.firstZoneID)) {
				console.log("don't hide zone");
				return false
			} else {
				console.log("hide zone");
				return true
			}
		},
		setAlertText: () => {
			state.alertVisible = true;
			setTimeout(() => {
				state.alertVisible = false;
			}, 3000);
		},
		zoneBorder: () => {
			const context = getContext();
			if ((state.zoneID == context.id) || (state.zoneID === '' && context.firstZoneID == context.id))
				return true;
		},
		zoneDescription: () => {
			if (state.zoneDescription !== '') {
				return true;
			}
		},
		saveNotes: () => {
			const textareaElement = document.getElementById("textArea");
			console.log("textArea value: " + textareaElement.value);
		},
		checkGameStart: () => {
			const context = getContext();
			const gameIDLocal = localStorage.getItem('gameID');
			console.log("gameNameLocal: " + gameIDLocal);
			console.log("context.gameID: " + context.gameID);
			if (localStorage.getItem("timeStart")) {
				/* check game-name */
				if ( gameIDLocal === context.gameID) {
					//alert('resuming game');
					state.alertVisible = true
					state.alertText = "resuming game"
					setTimeout(() => {
						state.alertVisible = false
					}, 3000);
					if (context.gameStart === true) {
						console.log("gameStart: true");
					} else {
						console.log("gameStart: false");
					}
					context.gameStart = true;
				}
			}
		},
		logIsOpen: () => {
			const { isOpen } = getContext();
			console.log( `Is open: ${ isOpen }` );
		},
	},
} );
