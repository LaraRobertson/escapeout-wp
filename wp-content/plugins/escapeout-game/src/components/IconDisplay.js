
export function IconDisplay({iconPath}) {
    //console.log("name: " + iconName);
    const siteURL =window.my_data.siteUrl;
    //console.log("siteURL:" + siteURL);
    //console.log("window.my_data.siteUrl:" + window.my_data.siteUrl);
    const imageURL = siteURL + iconPath + ".svg";
    if (iconPath !== "") {
        return (
            <div>
                <img src={imageURL} />
            </div>
        )
    } else {
        return (
            <div>icon not set</div>
        )
    }
}