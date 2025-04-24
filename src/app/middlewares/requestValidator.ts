import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const requestValidator = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const payload = await schema.parseAsync(req.body);
            req.body = payload;
            next()
        } catch (err) {
            next(err)
        }
    }
}

export default requestValidator