const imageSelect = {
    "Length of beam": {
        "elementType": "input",
        "elementConfig": {
            "type": "number",
            "placeholder": "Enter Length of beam",
            "pattern": "[^0-9]+"
        },
        "value": "",
        "validation": {
            "required": true
        },
        "valid": false,
        "label": "Length of beam",
        "touched": false
    },
    "Material Choice": {
        "elementType": "select",
        "elementConfig": {
            "type": "select",
            "placeholder": "",
            "options": [
                {
                    "text": "Steel",
                    "value": "Steel"

                },
                {
                    "text": "Aluminium",
                    "value": "Aluminium"

                }
            ]
        },
        "value": "",
        "label": "Material Choices",
        "validation": {
            "required": true
        },
        "valid": false,
        "touched": false
    },
    "Support Choice": {
        "elementType": "select",
        "elementConfig": {
            "type": "select",
            "placeholder": "",
            "options": [
                {
                    "text": "Simply Supported",
                    "value": "Simply Supported",
                    "image": require(`../assets/Simply Supported.png`)
                },
                {
                    "text": "Cantilever",
                    "value": "Cantilever",
                    "image":  require(`../assets/Cantilever.png`)
                },
                {
                    "text": "Fixed at both side",
                    "value": "Fixed at both side",
                    "image":  require(`../assets/Fixed at both side.png`)
                }
            ]
        },
        "label": "Support Choice",
        "validation": {
            "required": true
        },
        "valid": false,
        "touched": false
    }
}
export default imageSelect;