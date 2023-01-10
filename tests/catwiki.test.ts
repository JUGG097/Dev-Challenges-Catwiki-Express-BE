import request from "supertest";
import app from "../app";
import { MockBreedList, MockCatDetailData, MockImageList } from "../utils/helper_func";


describe("Tests the fetch, create and delete image functions", () => {

	it("Get request to fetch top ten cat breed succeeds", async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(MockCatDetailData),
				status: 200,
			})
		) as jest.Mock;

		const resp = await request(app).get("/api/v1/topTen");

		expect(resp.status).toEqual(200);

		expect(resp.body.data).toEqual(MockCatDetailData);
	});

	it("Get request to fetch top ten cat breed fails", async () => {
		global.fetch = jest.fn(() => Promise.reject()) as jest.Mock;

		const resp = await request(app).get("/api/v1/topTen");

		expect(resp.status).toEqual(500);
	});

	it("Get request to fetch specific cat breed detail succeeds", async () => {
		global.fetch = jest
			.fn()
			.mockImplementationOnce(() =>
				Promise.resolve({
					json: () => Promise.resolve(MockCatDetailData[0]),
					status: 200,
				})
			)
			.mockImplementationOnce(() =>
				Promise.resolve({
					json: () => Promise.resolve(MockImageList),
					status: 200,
				})
			) as jest.Mock;

		const resp = await request(app).get("/api/v1/details/beng");

		expect(resp.status).toEqual(200);

		expect(resp.body.data).toEqual(MockCatDetailData[0]);
	});

	it("Get request to fetch specific cat breed detail fails", async () => {
		global.fetch = jest.fn(() => Promise.reject()) as jest.Mock;

		const resp = await request(app).get("/api/v1/details/beng");

		expect(resp.status).toEqual(500);
	});

    it("Get request to fetch specific cat breed photos succeeds", async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(MockImageList),
				status: 200,
			})
		) as jest.Mock;

		const resp = await request(app).get("/api/v1/photos/beng");

		expect(resp.status).toEqual(200);

		expect(resp.body.data).toEqual(MockImageList);
	});

	it("Get request to fetch specific cat breed photos succeeds", async () => {
		global.fetch = jest.fn(() => Promise.reject()) as jest.Mock;

		const resp = await request(app).get("/api/v1/photos/beng");

		expect(resp.status).toEqual(500);
	});

    it("Get request to fetch all cat breeds list", async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(MockBreedList),
				status: 200,
			})
		) as jest.Mock;

		const resp = await request(app).get("/api/v1/breedlist");

		expect(resp.status).toEqual(200);

		expect(resp.body.data).toEqual(MockBreedList);
	});

	it("Get request to fetch specific cat breed photos succeeds", async () => {
		global.fetch = jest.fn(() => Promise.reject()) as jest.Mock;

		const resp = await request(app).get("/api/v1/breedlist");

		expect(resp.status).toEqual(500);
	});
});
