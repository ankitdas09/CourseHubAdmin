import { Request, Response, NextFunction } from "express";
import { ICreateAdminRequest } from "./admin.schema";
import services from "./admin.service";

async function getAdminDetails(req: Request, res: Response, next: NextFunction) {
    return res.json({
        _id: "789yiuhwjkdq879h",
        name: "Test admin",
        email: "test@admin.com",
    });
}

async function createAdmin(
    req: Request<{}, {}, ICreateAdminRequest>,
    res: Response,
    next: NextFunction
) {
    const { body } = req;
    const newAdmin = await services.createNewAdmin(body);
    res.json({
        created: true,
        user: newAdmin,
    });
}

export default { createAdmin, getAdminDetails };
