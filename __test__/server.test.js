'use strict';
const server = require('../src/server');
const supertest = require("supertest");
const request = supertest(server.app);

describe("Server", () => {
    it("getting data from home route /", async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello Home');
    });
    it("handle 404 error", async () => {
        const response = await request.get('/hi');
        expect(response.status).toEqual(404);
    });
    test("handle server error", async () => {
        const response = await request.get('/error');
        expect(response.status).toEqual(500);
    });
    it("testing /laith", async () => {
        const response = await request.get('/laith');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual("object");
    })
});