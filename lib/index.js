"use strict";

var iterateObject = require("iterate-object");

var emoji = require("emojilib");

console.log('category');

// first create map from unicode to object
function createCategoryMap(obj, fn, clone) {
    //console.log("OBJ: ", obj);
    var dst = clone === true ? {} : clone ? clone : obj;
    iterateObject(obj, function (v, n, o) {

        dst[v.char] = v.category;
    });
    return dst;
}

var categoryMap = module.exports = {};
categoryMap.emoji = createCategoryMap(emoji.lib, function (value, name) {
    return value.char;
}, true);



/**
 * get
 * Gets the emoji category, by providing the character.
 *
 * @name get
 * @function
 * @param {String} char The emoji character.
 * @return {String} The emoji name.
 */
categoryMap.get = function (char) {
    var cat = categoryMap.emoji[char];

//    console.log(categoryMap);

    return cat;
};

emoji = null;