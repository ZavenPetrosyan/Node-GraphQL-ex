const fetch = require("node-fetch");
const { promisify } = require("util");
const xmlParser = promisify(require("xml2js"));

fetch("https://www.goodreads.com/author/show/12855.Neil_deGrasse_Tyson")
        .then(response => response.json())
        console.log(response);

module.exports = new GraphQLSchema()        