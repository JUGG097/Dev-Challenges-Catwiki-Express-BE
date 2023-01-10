export const extractCatDetails = (objSubArr: any) => {
	return {
		id: objSubArr.id,
		name: objSubArr.name,
		description: objSubArr.description,
		temperament: objSubArr.temperament,
		origin: objSubArr.origin,
		life_span: objSubArr.life_span,
		wikipedia_url: objSubArr.wikipedia_url,
		adaptability: objSubArr.adaptability,
		affection_level: objSubArr.affection_level,
		child_friendly: objSubArr.child_friendly,
		grooming: objSubArr.grooming,
		intelligence: objSubArr.intelligence,
		health_issues: objSubArr.health_issues,
		social_needs: objSubArr.social_needs,
		stranger_friendly: objSubArr.stranger_friendly,
		image: objSubArr.image,
	};
};

export const extractBreedDetails = (objSubArr: any) => {
	return {
		id: objSubArr.id,
		name: objSubArr.name,
	};
};

export const MockCatDetailData = [
	{
		id: "beng",
		name: "Bengal",
		temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
		origin: "United States",
		description:
			"Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
		life_span: "12 - 15",
		adaptability: 5,
		affection_level: 5,
		child_friendly: 4,
		grooming: 1,
		health_issues: 3,
		intelligence: 5,
		social_needs: 5,
		stranger_friendly: 3,
		wikipedia_url: "https://en.wikipedia.org/wiki/Bengal_(cat)",
		image: {
			id: "O3btzLlsO",
			width: 1100,
			height: 739,
			url: "https://cdn2.thecatapi.com/images/O3btzLlsO.png",
		},
	},
	{
		id: "birm",
		name: "Birman",
		temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
		origin: "United States",
		description:
			"Birman are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
		life_span: "12 - 15",
		adaptability: 5,
		affection_level: 5,
		child_friendly: 4,
		grooming: 1,
		health_issues: 3,
		intelligence: 5,
		social_needs: 5,
		stranger_friendly: 3,
		wikipedia_url: "https://en.wikipedia.org/wiki/Bengal_(cat)",
		image: {
			id: "O3btzLlsO",
			width: 1100,
			height: 739,
			url: "https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg",
		},
	},
];

export const MockBreedList = [
	{
		id: "beng",
		name: "Bengal",
	},
	{
		id: "birm",
		name: "Birman",
	},
	{
		id: "bomb",
		name: "Bombay",
	},
	{
		id: "bslo",
		name: "British Longhair",
	},
];

export const MockImageList = [
	{
		id: "O3btzLlsO",
		width: 1100,
		height: 739,
		url: "https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg",
	},
	{
		id: "O3btzLlsO",
		width: 1100,
		height: 739,
		url: "https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg",
	},
];

