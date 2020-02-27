const imageSelect = {
    "Length of beam": {
        "elementType": "input",
        "elementConfig": {
            "type": "number",
            "placeholder": "Enter Length of beam",
            "pattern": "[^0-9]+",
            "min": 0
        },
        "value": "",
        "validation": {
            "required": true,
            "isNumeric":true,
            "minLength":0
        },
        "valid": false,
        "message":"",
        "label": "Length of beam in meter",
        "touched": false
    },
    "Material Choice": {
        "elementType": "select",
        "elementConfig": {
            "type": "select",
            "placeholder": "Please Select...",

            "options": [
                {
                    "key": "Steel",
                    "text": "Steel",
                    "value": "Steel",
                },
                {
                    "key": "Aluminium",
                    "text": "Aluminium",
                    "value": "Aluminium",
                }
            ]
        },
        "value": "",
        "validation": {
        },
        "valid": false,
        "label": "Material Choice",
        "touched": false
    },
    "Support Choice": {
        "elementType": "select",
        "elementConfig": {
            "type": "select",
            "placeholder": "Please select....",
            "options": [
                {
                    "text": "Simply Supported",
                    "value": "Simply Supported",
                    "key": 1,
                    "image": require(`../assets/Simply Supported.png`)
                },
                {
                    "text": "Cantilever",
                    "value": "Cantilever",
                    "key": 2,
                    "image": require(`../assets/Cantilever.png`)
                },
                {
                    "text": "Fixed at both side",
                    "value": "Fixed at both side",
                    "key": 3,
                    "image": require(`../assets/Fixed at both side.png`)
                }
            ]
        },
        "value": "",
        "label": "Support Choice",
        "validation": {
        },
        "valid": false,
        "touched": false
    }
}
export default imageSelect;