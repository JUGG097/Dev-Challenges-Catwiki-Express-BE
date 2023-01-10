import { Request, Response, NextFunction } from "express";
import { omit } from "lodash";
import { getCatImages, getBreeds } from "../services/catwiki.service";
import { extractBreedDetails, extractCatDetails } from "../utils/helper_func";
import { CatDetailsData, CatImageData, BreedListData } from "../utils/types";

export const showTopTen = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const payload = await getBreeds("topTen", req.params["catId"]);

		if (payload.status !== 200) {
			res.status(503).json({
				success: false,
				message: "3rd party api error",
			});
		}

		const payloadJson: any = await payload.json();

		let data_array: CatDetailsData[] = [];
		payloadJson.forEach((element: any) => {
			data_array.push(extractCatDetails(element));
		});

		res.status(200).json({
			success: true,
			data: data_array,
		});
	} catch (error) {
		// catch error and forward to error handler
		return next(error);
	}
};

export const showCatDetails = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		// Get cat details fo the cat id (the image is missing from this response)
		const detailPayload = await getBreeds("details", req.params["catId"]);

		if (detailPayload.status !== 200) {
			res.status(503).json({
				success: false,
				message: "3rd party api error",
			});
		}

		const detailPayloadJson: any = await detailPayload.json();

		// Get image for the cat id
		const imagePayload = await getCatImages(req.params["catId"], "1");

		if (imagePayload.status !== 200) {
			res.status(503).json({
				success: false,
				message: "3rd party api error",
			});
		}

		// attach the image data to the previous cat details response above
		const imagePayloadJson: CatImageData[] = await imagePayload.json();
		detailPayloadJson.image = imagePayloadJson[0];

		res.status(200).json({
			success: true,
			data: extractCatDetails(detailPayloadJson),
		});
	} catch (error) {
		return next(error);
	}
};

export const showCatPhotos = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const imagePayload = await getCatImages(req.params["catId"], "8");

		if (imagePayload.status !== 200) {
			res.status(503).json({
				success: false,
				message: "3rd party api error",
			});
		}

		const imagePayloadJson: CatImageData[] = await imagePayload.json();

		res.status(200).json({
			success: true,
			data: imagePayloadJson,
		});
	} catch (error) {
		return next(error);
	}
};

export const showBreedList = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const payload = await getBreeds("breedList", req.params["catId"]);

		if (payload.status !== 200) {
			res.status(503).json({
				success: false,
				message: "3rd party api error",
			});
		}

		const payloadJson: any = await payload.json();

		let data_array: BreedListData[] = [];
		payloadJson.forEach((element: any) => {
			data_array.push(extractBreedDetails(element));
		});

		res.status(200).json({
			success: true,
			data: data_array,
		});
	} catch (error) {
		// catch error and forward to error handler
		return next(error);
	}
};
