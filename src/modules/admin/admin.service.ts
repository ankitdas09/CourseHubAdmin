import AppError from "../../utils/AppError";
import AdminModel from "./admin.model";
import { IAdmin, IAdminCore } from "./admin.schema";

async function createNewAdmin(data: IAdmin) {
    const newAdmin = await AdminModel.create({ ...data });
    return newAdmin;
}

async function getAdminByEmail(email: string): Promise<IAdmin> {
    const user = await AdminModel.findOne({ email: email });
    if (!user) throw new AppError(403, "Invalid Credentials!");
    return user;
}
async function getAdminByUsername(username: string): Promise<IAdmin> {
    const user = await AdminModel.findOne({ name: username });
    if (!user) throw new AppError(403, "Invalid username or password!");
    return user;
}

export default { createNewAdmin, getAdminByEmail, getAdminByUsername };
