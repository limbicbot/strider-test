var expect    = require("chai").expect;
var request = require("request");
var app = require("../index.js");

describe("Main web route", function() {

  var url = "http://localhost:3000";

  it("returns status 200", function() {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });

  it("prints 'hello world'", function() {
    request(url, function(error, response, body) {
      expect(body).to.equal("hello world");
    });
  });

});