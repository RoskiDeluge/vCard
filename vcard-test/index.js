const fs = require("fs");
const vCardParser = require("../parser.js");

const vcardData = fs.readFileSync("contacts.vcf", "utf8");
const result = vCardParser.parse(vcardData);
console.log(JSON.stringify(result, null, 2));

module.exports = vCardParser;
