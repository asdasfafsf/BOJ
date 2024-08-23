const input = require('fs')
    .readFileSync(process.platform === 'linux' ?  0 : './input.txt', 'utf-8')
    .toString()
    .trim()

function getStarColor(wavelength) {
    if (wavelength >= 620 && wavelength <= 780) {
        return "Red";
    } else if (wavelength >= 590 && wavelength < 620) {
        return "Orange";
    } else if (wavelength >= 570 && wavelength < 590) {
        return "Yellow";
    } else if (wavelength >= 495 && wavelength < 570) {
        return "Green";
    } else if (wavelength >= 450 && wavelength < 495) {
        return "Blue";
    } else if (wavelength >= 425 && wavelength < 450) {
        return "Indigo";
    } else if (wavelength >= 380 && wavelength < 425) {
        return "Violet";
    } else {
        return "Invalid Wavelength";
    }
}
    
console.log(getStarColor(+input))