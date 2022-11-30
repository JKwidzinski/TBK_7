var request = require('request');
const base_url = process.env.BASE_URL || 'http://localhost:3000';
const hobbies = '[{"hobby_id":1,"hobby":"swimming","years":8},{"hobby_id":2,"hobby":"diving","years":5},{"hobby_id":3,"hobby":"jogging","years":4},{"hobby_id":4,"hobby":"dancing","years":2.75},{"hobby_id":5,"hobby":"cooking","years":5},{"hobby_id":6,"hobby":"swimming","years":4.5},{"hobby_id":7,"hobby":"diving","years":1.25},{"hobby_id":8,"hobby":"jogging","years":1.5}]'
const hobby3 = '[{"hobby_id":3,"hobby":"jogging","years":4}]'

describe("API test suite", () => {
    describe("GET /hobbies", ()=> {
        it("returns status code 200", function(done) {
            request.get(base_url+'/hobbies', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return hobbies", function(done) {
            request.get(base_url+'/hobbies', (error, response, body) => {
                expect(body).toBe(hobbies);
                done();
            });
        });
    });

    describe("GET /hobbies/:n", ()=> {
        it("returns status code 200", function(done) {
            request.get(base_url+'/hobbies/3', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return hobby of index n", function(done) {
            request.get(base_url+'/hobbies/3', (error, response, body) => {
                expect(body).toBe(hobby3);
                done();
            });
        });
    });

    describe("GET /hobbies/years/avg", ()=> {
        it("returns status code 200", function(done) {
            request.get(base_url+'/hobbies/years/avg', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return years avg", function(done) {
            request.get(base_url+'/hobbies/years/avg', (error, response, body) => {
                expect(body).toBe("4");
                done();
            });
        });
    });
});