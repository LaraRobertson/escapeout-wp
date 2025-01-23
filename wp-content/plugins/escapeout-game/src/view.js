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
const saveScore = async () => {
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
	state.gameScore = 'total time: ' + totalTime + " mins | hint time: " + state.hintTime + ' | first time: "' + state.firstTime + '"';
	state.showGameScore = true;

	/* hintTime is a state variable */
	const raw = JSON.stringify({
		"timeEnd": endDate,
		"totalTime": totalTime,
		"hintTime": state.hintTime,
		"completed": 'yes',
	});

	const requestOptions = {
		method: "PUT",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
	};
	const url = state.siteURL + "/wp-json/escapeout/v1/game-score/" + state.gameScoreID;
	try {
		const response = await fetch(url, requestOptions)
		if (!response.ok) {
			console.error('Request failed with status ' + response.status)
		}
	} catch (error) {
		console.error('Error:', error.message)
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

const createScore = async ({postID, userID, gameID, gameName, userEmail, designerEmail, designerName, timeStart, teamName}) => {
	/* note - can only update fields that you created, probably because of authorization... */
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
	const url = state.siteURL + "/wp-json/escapeout/v1/game-score/?userID=" + userID + "&postID=" + postID;

	try {
		const response = await fetch(url, requestOptions)
		if (!response.ok) {
			console.error('Request failed with status ' + response.status)
		}
		const data = await response.json();
		console.log('data.length: ' + data.length);
		state.firstTime = "yes";
		if (data.length>1) {state.firstTime = "no";}
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
				console.error('Request failed with status ' + response.status)
			}
			/* get ID */
			const requestOptions3 = {
				method: "GET",
				headers: myHeaders,
				credentials: "include"
			};
			const url3 = state.siteURL + "/wp-json/escapeout/v1/game-score/?userID=" + userID + "&postID=" + postID + "&timeStart=" + timeStart;
			try {
				const response = await fetch(url3, requestOptions3)
				if (!response.ok) {
					console.error('Request failed with status ' + response.status)
				}
				const data2 = await response.json();
				/*data is an array */
				console.log("data2: " + JSON.stringify(data2));
				if (data2.length>0) {
					state.gameScoreID = data2[0].id;
					localStorage.setItem("gameScoreID",data2[0].id);
				}
			} catch (error) {
				console.error('Error3:', error.message)
			}

		} catch (error) {
			console.error('Error2:', error.message)
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
		guessAttempt: () => {
			const context = getContext();
			console.log( "userID: " + context.userID);
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
					console.log( "userID: " + context.userID);
					context.solved = true;
					context.timeEnd = Date();
					console.log( "postID: " + context.postID);
					setTimeout(() => {
						context.modalOpen = false
					}, 1600);
					/* check if finished */
					if (state.solvedCount === state.puzzleTotal) {
						state.alertVisible = true
						state.alertText = "Winner"
						/* send to database */
						saveScore();
						setTimeout(() => {
							removeLocalStorage();
							context.gameStart = false;
							context.finished = false;
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
			const input = document.getElementById("team-name").value;
			context.teamName = input;
			console.log("context.teamName: " + context.teamName);
			//state.showGameScore
			// check waiver
			if (context.waiverSigned === true) {
				//check teamName
				if (context.teamName !== '') {
					console.log("context.teamName (again): " + context.teamName);
					/* check for obscenities */
					if (matcher.hasMatch(context.teamName)) {
						state.errorMessage = "The Team Name contains profanities. Please choose another.";
						context.teamName="";
					} else {
						state.errorMessage="";
						/* need teamName in localstorage? */
						localStorage.setItem("teamName", context.teamName);
						/* this is timeStart */
						const date = new Date().getTime();
						/* ... */
						state.timeStart = date;
						localStorage.setItem("timeStart", date);
						state.formattedTimeStart =  format(date, "MM/dd/yy h:mma");
						context.gameStart = true;
						state.gameScore = '';
						state.showGameScore = false;
						state.hintTime=0;
						state.showWaiver=false;

						createScore({postID:context.postID, userID:context.userID, gameID:context.gameID, gameName:context.gameName, userEmail:context.userEmail, designerEmail: context.designerEmail, designerName: context.designerName, timeStart:date, teamName: context.teamName});
						/* get gameScoreID */
					}
				} else {
					//set errorMessage
					state.errorMessage = "Please choose a Team Name"
				}
			} else {
				state.errorMessage="You Need to Sign Waiver";
			}
		},
		toggleTheme() {
			state.isDark = ! state.isDark;
		},
	},
	callbacks: {
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
			if (localStorage.getItem("timeStart")) {
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
		},
		logIsOpen: () => {
			const { isOpen } = getContext();
			console.log( `Is open: ${ isOpen }` );
		},
	},
} );
