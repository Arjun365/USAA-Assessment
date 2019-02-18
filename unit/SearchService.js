const frisby = require('frisby');
const ENV = require("../support/env.json");
const BASE_URL = ENV.integration.TestBaseUrl;

describe("Api Test", function() {

  describe("GET", function() {

   it("should return the both largest city and capital based on user input", function(done) { 

    frisby
        .get(BASE_URL)
        .then(function(response) {
          expect(response.status).toBe(200);
          expect(typeof response).toBe("object");
          expect(getItemByType(response.json.RestResponse.result, "Alaska")).toBe("Largest City:Alaska, Capital:Juneau");           
        }).done(done);
    })
   })

 // ...
});

function getItemByType(resJson, searchValue){
  if(resJson==null)
    return null;
  
  expect(resJson.length).toBe(55);
  for(var element =0; element<resJson.length; element++){  
      if(searchValue==resJson[element].name || searchValue==resJson[element].abbr)
          return "Largest City:"+ resJson[element].name+", Capital:"+resJson[element].capital;           
  }
  return "";
}
