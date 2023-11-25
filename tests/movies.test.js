const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
    it("Test format json et statut 200 all movies", async () => {
        const response = await request(app).get("/api/movies");
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    });

describe("GET /api/movies/:id", () => {
    it("Pour l'id 1, vérife le statut 200 et le format en json", async () => {
        const response = await request(app).get("/api/movies/1");
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    });

    it("Vérife le statut de la réponse 404(Not Found)", async () => {
        const response = await request(app).get("/api/movies/0");
        expect(response.status).toEqual(404);
    });
});
});