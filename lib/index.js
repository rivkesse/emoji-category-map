// "use strict";

// const names = require("emoji-name-map")
//     , iterateObject = require("iterate-object")
//     ;

// const unicode = module.exports = {};
// unicode.emoji = {};

// iterateObject(names.emoji, (value, name) => unicode.emoji[value] = name);

// *
//  * get
//  * Gets the emoji name, by providing the character.
//  *
//  * @name get
//  * @function
//  * @param {String} char The emoji character.
//  * @return {String} The emoji name.

// unicode.get = function (char) {
//     return unicode.emoji[char];
// };

"use strict";

var mapO = require("map-o"),
    iterateObject = require("iterate-object");

var emoji = require("emojilib");

var categoryMap = module.exports = {};
categoryMap.emoji = mapO(emoji.lib, function (value) {
    return value.char;
}, true);
iterateObject(categoryMap.emoji, function (value, category, obj) {
    return !value && delete obj[category] || true;
});

var unicode = module.exports = {};
unicode.emoji = {};

iterateObject(categoryMap.emoji, function (value, category) {
    return unicode.emoji[value] = category;
});

/**
 * get
 * Gets the emoji category, by providing the character.
 *
 * @name get
 * @function
 * @param {String} char The emoji character.
 * @return {String} The emoji name.
 */
unicode.get = function (char) {
    return categoryMap.emoji[char];
};

emoji = null;