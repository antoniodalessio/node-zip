var fs = require('react-native-fs');
var JSZip = require('jszip');

global.JSZip = JSZip;
module.exports = function(data, options) { return new JSZip(data, options) };
