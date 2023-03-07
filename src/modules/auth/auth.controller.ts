import { Request, Response, NextFunction } from "express";
import { IGenerateCodeRequest, ILoginRequest } from "./auth.schema";
import authService from "./auth.service";
import AppError from "../../utils/AppError";
async function generateOTP(
    req: Request<{}, {}, IGenerateCodeRequest>,
    res: Response,
    next: NextFunction
) {
    await authService.authenticateAndGenerateOTP(req.body.name, req.body.password);
    return res.json({
        otpGenerated: true,
    });
}

async function login(req: Request<{}, {}, ILoginRequest>, res: Response, next: NextFunction) {
    const match = await authService.verifyOTP(req.body.name, req.body.otp);
    if (!match) {
        return next(new AppError(403, "Invalid OTP"));
    }
    return res.json({ loggedIn: true });
}

export default { generateOTP, login };
