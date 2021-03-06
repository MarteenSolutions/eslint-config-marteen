module.exports = {
    "extends": [
        'airbnb'
    ],
    "ecmaFeatures": {},
    // Rules
    "rules": {
        "indent": [2, 4, {"SwitchCase": 1}],
        "comma-dangle": [2, "never"],
        "react/prop-types": [0],
        "no-use-before-define": [0],
        "react/jsx-indent-props": [2, 4],
        "new-cap": [2, {
                "capIsNewExceptions": ["List", "Record"]
            }
        ],
        "max-len": [0],
        "arrow-body-style": [0],
        "no-unused-expressions": [2, {
            allowShortCircuit: true,
            allowTernary: true
        }]
    },
    "globals": {}
}
