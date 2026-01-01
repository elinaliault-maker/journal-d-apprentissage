/* Exemple of use :
    const baseColor = '#12183b';
    const arrayBG = calculateTintArrayOfColor(baseColor, 0.16, 4);
    const arrayHover = calualteTintsOfAnArray(arrayBG, 0.06);
    const divHoverColor = calualteTintsOfColor(divBaseColor, 0.06);
*/

/* FONCTIONS */
// Calculate tints and shades of an Hex color with a percentage difference
const calculateTintAndShade = (
    hexColor, // using #663399 as an example
    percentage = 0.05 // using 10% as an example
) => {
    const r = parseInt(hexColor.slice(1, 3), 16); // r = 102
    const g = parseInt(hexColor.slice(3, 5), 16); // g = 51
    const b = parseInt(hexColor.slice(5, 7), 16); // b = 153

    const tintR = Math.round(Math.min(255, r + (255 - r) * percentage)); // 117
    const tintG = Math.round(Math.min(255, g + (255 - g) * percentage)); // 71
    const tintB = Math.round(Math.min(255, b + (255 - b) * percentage)); // 163
    const shadeR = Math.round(Math.max(0, r - r * percentage)); // 92
    const shadeG = Math.round(Math.max(0, g - g * percentage)); // 46
    const shadeB = Math.round(Math.max(0, b - b * percentage)); // 138

    return {
        tint: {
            r: tintR,
            g: tintG,
            b: tintB,
            hex:
                '#' +
                [tintR, tintG, tintB]
                    .map(x => x.toString(16).padStart(2, '0'))
                    .join(''), // #7547a3 
        },
        shade: {
            r: shadeR,
            g: shadeG,
            b: shadeB,
            hex:
                '#' +
                [shadeR, shadeG, shadeB]
                    .map(x => x.toString(16).padStart(2, '0'))
                    .join(''), // #5c2e8a 
        },
    };
};

// Calculate an array of tints based on a specific color
function calculateTintArrayOfColor(color, percentage = 0.1, quantity, baseIncluded = true) {
    // With baseColor being the first color of the retun array
    if(baseIncluded == true) {
        let arrayTint = [];
        arrayTint[0] = color;
        let percentageOfTint = percentage;
        for (let i = 0; i < (quantity - 1); i++) {
        arrayTint[i + 1] = calculateTintAndShade(color, percentageOfTint).tint.hex;
        percentageOfTint = percentageOfTint + percentage ;
        };
        return arrayTint;
    }
    // Without the baseColor included in the returned array
    else {
        let arrayTint = [];
        let percentageOfTint = percentage;
        for (let i = 0; i < (quantity); i++) {
        arrayTint[i] = calculateTintAndShade(color, percentageOfTint).tint.hex;
        percentageOfTint = percentageOfTint + percentage ;
        };
        return arrayTint;
    }
    
};

// Calculate the tints of an existing array
function calualteTintsOfAnArray(arrayOfColors, percentage = 0.1) {
    let arrayTint = [];
    for (let i = 0; i < arrayOfColors.length; i++) {
        arrayTint[i] = calculateTintAndShade(arrayOfColors[i], percentage).tint.hex;
    }
    return arrayTint;
};

//Calculate a tint of a base color
function calualteTintsOfColor(baseColor, percentage = 0.1) {
    let tintColor = calculateTintAndShade(baseColor, percentage).tint.hex;
    return tintColor;
};