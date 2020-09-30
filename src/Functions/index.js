export const checkValidity = (value, rules) => {
    // console.log(value)
    let isValid = true;
    let message = [];
    if (rules.required) {
        isValid = value.trim() !== "" && isValid;
        if (isValid === false)
            message.push("Please enter the value");
    }

    if (rules.isNumeric) {
        // const pattern = /^\d+$/;
        const pattern = /^(\d*\.)?\d+$/;

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
        // console.log(typeof (value), typeof (this.beamLength.value), isValid)
        isValid = (parseFloat(value) <= parseFloat(this.beamLength.value)) && isValid;
        if (isValid === false)
            message.push("Please enter value less than length of beam");
    }

    return [isValid, message[0]];
};


export const valueOfE = (data) => {
    let value;
    // console.log(data)
   if(data === 'Aluminium'){
   value = '69'
   }
   else if(data === 'Steel'){
       value= '199.947'
   }
    return value;
  }
  