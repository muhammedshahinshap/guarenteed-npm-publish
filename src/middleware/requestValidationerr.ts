import { NextFunction, Request, Response } from "express";
import {  validationResult } from "express-validator";
import ReqValidationerr from "../errors/req-validation";

export default (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) throw new ReqValidationerr(errors.array());
  next();
};
