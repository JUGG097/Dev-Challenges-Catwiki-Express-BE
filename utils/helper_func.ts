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

export const extractBreedDetails= (objSubArr: any) => {
    return {
        id: objSubArr.id,
        name: objSubArr.name,
    }
}
