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
