// test jasmine
var request = require('request');

it("should respond with hello world", function(done) {
  let currentDate = new Date();
  request("http://localhost:8080", function(error, response, body){
      console.log("Body : " + body);
      console.log("Response : " + response);
    expect(currentDate.getMinutes().toString()).toEqual(body);
    done();
  });
});

it("Test date expiration", function(done) {
  let currentDate = new Date();
  request("http://localhost:8080", function(error, response, body){
      let cle = Object.keys(response);
      let expires = new Date(response['headers']['expires']);
      console.log("Body : " + body);
      console.log("Response : " + cle);
      console.log("Headers expires" + response['headers']['expires']);
    expect(currentDate.getMinutes()+1).toEqual(expires.getMinutes());
    done();
  });
});

