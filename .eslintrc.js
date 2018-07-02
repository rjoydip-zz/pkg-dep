module.exports = {
    "extends": ["standard"],
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true
    },
    rules: {
        "quotes": ["error", "single"],
        "indent": ["error", 2]
    },
    "parserOptions": {
        "ecmaVersion": 6
    },
    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": true,
        "regexUFlag": true,
        "regexYFlag": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodeCodePointEscapes": true,
        "globalReturn": true,
        "jsx": true
    }
};