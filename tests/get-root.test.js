const request = require("supertest");
const app = require("../bc-express/app");
describe("Test / route", () => {
  test("Get /", () => {
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});
