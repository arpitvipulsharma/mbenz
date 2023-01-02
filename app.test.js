const fetchDataAndRenderTable = require('./app');
const expect = require("chai");
const jsdom = require('mocha-jsdom')
describe("App test", () => {
    jsdom({
        url: "http://localhost",
      });
it('fetchdata', () => {
    let fdar = fetchDataAndRenderTable()
});
});
