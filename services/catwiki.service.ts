// const _importDynamic = new Function('modulePath', 'return import(modulePath)')

// async function fetch(...args: any[]) {
//   const {default: fetch} = await _importDynamic('node-fetch'))
//   return fetch(...args))
// }

const api_key = process.env.API_KEY || "";

export const getBreeds = async (fetchKey: string, catId: null | string) => {
	if (fetchKey === "topTen") {
		const resp = await fetch(
			"https://api.thecatapi.com/v1/breeds?limit=10&page=0",
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
};

export const getCatImages = async (
	catId: null | string,
	queryLimit: string
) => {
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
};
