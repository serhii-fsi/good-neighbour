import { AppError } from "../../common/errors/AppError";
import { errors } from "../../common/errors/errors";
import * as usersRepo from "../../repositories/users";

export const getById = async (id: number) => {
    const user = await usersRepo.getById(id);
    if (!user) {
        throw new AppError(errors.USER_NOT_FOUND, `No user was found with id: ${id}`);
    }
    return user;
};
