
export function editArrayItem(itemType, field, newValue, index, index2, attributes, setAttributes) {
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
    setAttributes({playZones: newArray});
}

export function deleteArrayItem(itemType, itemArray, zoneIndex, indexToDelete,attributes,setAttributes) {
    const newArray = attributes.playZones.concat([]);
    const newItemArray = itemArray.filter(function (x, index) {
        return index != indexToDelete
    })
    switch (itemType) {
        case "puzzle":
            console.log("delete puzzle")
            if (newItemArray.length===0) {
                const newObject = newArray[zoneIndex];
                delete newObject.puzzleArray;
            } else {
                newArray[zoneIndex]["puzzleArray"] = newItemArray;
            }
            break;
        case "clue":
            console.log("delete clue")
            if (newItemArray.length===0) {
                const newObject = newArray[zoneIndex];
                delete newObject.clueArray;
            } else {
                newArray[zoneIndex]["clueArray"] = newItemArray;
            }
            break;
        case "hint":
            console.log("delete hint")
            if (newItemArray.length===0) {
                const newObject = newArray[zoneIndex];
                delete newObject.hintArray;
            } else {
                newArray[zoneIndex]["hintArray"] = newItemArray;
            }
            break;
    }
    setAttributes({playZones: newArray});
}