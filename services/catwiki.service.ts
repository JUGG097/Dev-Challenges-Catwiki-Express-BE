import createError from "http-errors";

const api_key = process.env.API_KEY || "";

export const getBreeds = async (fetchKey: string, catId: null | string) => {
	try {
		if (fetchKey === "topTen") {
			const resp = await fetch(
				"https://api.thecataapi.com/v1/breeds?limit=10&page=0",
				{
					method: "GET",
					headers: {
						"x-api-key": api_key,
					},
				}
			);
			return resp;
		} else if (fetchKey === "details") {
			const resp = await fetch(
				"https://api.thecatapi.com/v1/breeds/" + catId,
				{
					method: "GET",
					headers: {
						"x-api-key": api_key,
					},
				}
			);
			return resp;
		} else {
			const resp = await fetch("https://api.thecatapi.com/v1/breeds/", {
				method: "GET",
				headers: {
					"x-api-key": api_key,
				},
			});
			return resp;
		}
	} catch (error) {
		// throw new Error("3rd Party API Error: " + error);
		throw createError(503, "3rd Party API Error: " + error);
	}
};

export const getCatImages = async (
	catId: null | string,
	queryLimit: string
) => {
	try {
		const resp = await fetch(
			"https://api.thecatapi.com/v1/images/search?page=0&limit=" +
				queryLimit +
				"&breed_ids=" +
				catId +
				"&include_breeds=false",
			{
				method: "GET",
				headers: {
					"x-api-key": api_key,
				},
			}
		);

		return resp;
	} catch (error) {
		// throw new Error("3rd Party API Error: " + error);
		throw createError(503, "3rd Party API Error: " + error);
	}
};
