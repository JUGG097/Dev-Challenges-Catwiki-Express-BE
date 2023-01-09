import { Request, Response, NextFunction } from "express";
import { omit } from "lodash";
import {getCatImages, getBreeds} from "../services/catwiki.service";
import {extractBreedDetails, extractCatDetails} from "../utils/helper_func"
import { CatDetailsData, CatImageData, BreedListData, breedApiDataType } from "../utils/types";

export const showTopTen = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const payload = await getBreeds("topTen", req.params["catId"])

        if(payload.status !== 200) {
            res.status(503).json({
                success: false,
                message: "3rd party api error",
            });
        }

        const payloadJson: any = await payload.json();

        let data_array: CatDetailsData[] = [];
        payloadJson.forEach((element: any) => {
            data_array.push(extractCatDetails(element))
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
		// const images = await getImagesService()
		res.status(200).json({
			success: true,
			data: {},
		});
	} catch (error) {
		// catch error and forward to error handler
		return next(error);
	}
};

export const showCatPhotos = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		// const images = await getImagesService();
		res.status(200).json({
			success: true,
			data: {},
		});
	} catch (error) {
		// catch error and forward to error handler
		return next(error);
	}
};

export const showBreedList = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		// const images = await getImagesService();
		res.status(200).json({
			success: true,
			data: {},
		});
	} catch (error) {
		// catch error and forward to error handler
		return next(error);
	}
};
