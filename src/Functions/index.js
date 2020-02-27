export const checkValidity = (value, rules) => {
    console.log(value)
    let isValid = true;
    let message = [];
    if (rules.required) {
        isValid = value.trim() !== "" && isValid;
        if (isValid === false)
            message.push("Please enter the value");
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
        if (isValid === false)
            message.push("Please enter numeric value");
    }

    if (rules.minLength) {
        isValid = (value >= rules.minLength) && isValid;
        if (isValid === false)
            message.push("Please enter value greater than 0");
    }

    if (rules.lessthanBeam) {
        console.log(typeof (value), typeof (this.beamLength.value), isValid)
        isValid = (parseInt(value) <= parseInt(this.beamLength.value)) && isValid;
        if (isValid === false)
            message.push("Please enter value less than length of beam");
    }

    return [isValid, message[0]];
};
