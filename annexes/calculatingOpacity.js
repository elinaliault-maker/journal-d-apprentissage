/* Exemple of use
    const backgroundColor = calculateOpacityOfAnArray(borderColor, 24);
*/

/* FONCTIONS */
// Calculate the color name for a different opacity number
function calculateOpacityOfColor(hexColorString, opacity) {
    let hexColorOpacity;
    // if opacity isn't and integer
    if (!Number.isInteger(opacity)) {
        console.log("Error : Opacity number isn't an integer");
        return null;
    }
    // if opacify isn't between 1 and 100 
    if (opacity < 1 || opacity > 100) {
        console.log("Error : Opacity number isn't between 1 and 100");
        return null;
    }
    // if hex length isn't either 7 or 9
    if(hexColorString.length !== 7 && hexColorString.length !== 9) {
        console.log("Error : the hex sting length is wrong");
        return null;
    }
    //calculate the hexadecimal alpha value
    const alpha = Math.round(opacity / 100 * 255).toString(16).padStart(2, "0").toUpperCase();

    // Opacity is between 1 and 99 (both included)
    if (opacity >= 1 && opacity <= 99) {
        // Hex string doesn't have opacity yet (ex: "#8D1616")
        if(hexColorString.length === 7) {
            hexColorOpacity = hexColorString + alpha;
        }
        // Hex string already has some opacity defined (ex: "#8D161624")
        else if(hexColorString.length === 9) {
            hexColorOpacity = hexColorString.slice(0, 7) + alpha;
        }
    }
    // Opacity is strictly equal 100 (no opacity defined in the end string)
    else if (opacity === 100) {
        // Hex string doesn't have opacity (ex: "#8D1616")
        if(hexColorString.length === 7) {
            hexColorOpacity = hexColorString;
        }
        // Hex string already has some opacity defined (ex: "#8D161624")
        else if(hexColorString.length === 9) {
            hexColorOpacity = hexColorString.slice(0, 7);
        }
    }
    return hexColorOpacity;
}


// Calculate opacity of an existing array
function calculateOpacityOfAnArray(arrayOfColors, opacity) {
    let arrayOpacity = [];
    for (let i = 0; i < arrayOfColors.length; i++) {
        arrayOpacity[i] =  calculateOpacityOfColor(arrayOfColors[i], opacity);
    }
    return arrayOpacity;
}