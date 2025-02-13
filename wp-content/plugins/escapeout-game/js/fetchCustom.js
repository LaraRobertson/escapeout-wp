
export const getPublicData = async ({postID,state}) => {
    /* note - can only update fields that you created, probably because of authorization... */
    console.log("nonce: " + my_custom_vars.nonce);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Headers", "Authorization, X-WP-Nonce, Content-Disposition, Content-MD5, Content-Type");
    myHeaders.append("Access-Control-Expose-Headers","X-WP-Total, X-WP-TotalPages, Link");
    //myHeaders.append( "Authorization", "Bearer " + btoa( 'lara:4lRX C2u5 igwa ckGX j2Dv jWLr' ));
    myHeaders.append( "Vary", "Origin" );
    myHeaders.append('X-WP-Nonce', my_custom_vars.nonce);
    /* get game data */
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        credentials: "include"
    };
    const url = state.siteURL + "/wp-json/escapeout/v1/eo-game/" + postID;
    try {
        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            console.error('url Request failed with status ' + response.status)
        }
        const data = await response.json();
        /* data is an array */
        //console.log("data: " + data.post_content);
        //console.log("data.length: " + data.length);
        if (data.hasOwnProperty("post_content")) {
            console.log("data: " + data.post_content);
            const firstIndex = data.post_content.indexOf("{");
            const lastIndex = data.post_content.indexOf("-->");
            let postAttributes = data.post_content.slice(firstIndex,lastIndex).trim();
            let postAttributesObj = JSON.parse(postAttributes);
            let quesArray = [];
            let clueTextArray = [];
            let hintTextArray = [];
            let paIndex = 0;
            let caIndex = 0;
            let haIndex = 0;
            console.log("firstIndex: " + firstIndex);
            console.log("lastIndex: " + lastIndex);
            console.log("postAttributes: " + postAttributes);
            console.log("postAttributes (question): " + postAttributesObj.playZones[0].puzzleArray[0].question);
            /* get attributes from post_content */
            for (let i=0; i<postAttributesObj.playZones.length;i++){
                if (postAttributesObj.playZones[i].disabled === "No") {
                    if (postAttributesObj.playZones[i].hasOwnProperty("puzzleArray")) {
                        for (let j=0; j<postAttributesObj.playZones[i].puzzleArray.length;j++){
                            if (postAttributesObj.playZones[i].puzzleArray[j].disabled === "No") {
                                let key = 'input'+paIndex;
                                let value = postAttributesObj.playZones[i].puzzleArray[j].question;
                                let newObject = {};
                                newObject[key]=value;
                                quesArray.push(newObject);
                                paIndex++;
                            }
                        }
                    }
                    if (postAttributesObj.playZones[i].hasOwnProperty("clueArray")) {
                        for (let j=0; j<postAttributesObj.playZones[i].clueArray.length;j++){
                            if (postAttributesObj.playZones[i].clueArray[j].disabled === "No") {
                                let key = 'clue'+caIndex;
                                let value = postAttributesObj.playZones[i].clueArray[j].text;
                                let newObject = {};
                                newObject[key]=value;
                                clueTextArray.push(newObject);
                                caIndex++;
                            }
                        }
                    }
                    if (postAttributesObj.playZones[i].hasOwnProperty("hintArray")) {
                        for (let j=0; j<postAttributesObj.playZones[i].hintArray.length;j++){
                            if (postAttributesObj.playZones[i].hintArray[j].disabled === "No") {
                                let key = 'hint'+haIndex;
                                let value = postAttributesObj.playZones[i].hintArray[j].text;
                                let newObject = {};
                                newObject[key]=value;
                                hintTextArray.push(newObject);
                                haIndex++;
                            }
                        }
                    }
                }
            }
            console.log("JSON.stringify(quesArray): " + JSON.stringify(quesArray));
            state.puzzleQuestionArray = quesArray;
            localStorage.setItem('quesArray',JSON.stringify(quesArray));
            console.log("JSON.stringify(clueTextArray): " + JSON.stringify(clueTextArray));
            state.clueTextArray = clueTextArray;
            localStorage.setItem('clueTextArray',JSON.stringify(clueTextArray));
            console.log("JSON.stringify(hintTextArray): " + JSON.stringify(hintTextArray));
            state.hintTextArray = hintTextArray;
            localStorage.setItem('hintTextArray',JSON.stringify(hintTextArray));
        }
    } catch (error) {
        console.error('Error (get post_content):', error.message)
    }
}
export const fetchCustom = async ({postID, userID, realTimeStart}) => {
    /* note - can only update fields that you created, probably because of authorization... */
    console.log("fetchCustom");
    console.log("realTimeStart: " + realTimeStart);
    /* used POSTMAN */
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-WP-Nonce", MyApp.nonce);


    const raw = JSON.stringify({
        "postID": postID,
        "userID": userID,
        "timeStart": realTimeStart
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://tybeewebdesign-api/wp-json/escapeout-admin/v1/game-score", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

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
