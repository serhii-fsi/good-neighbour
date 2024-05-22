import * as usersRepo from "../../repositories/users";
import { User } from "../../db/seeds/data/types/data.types";

export const create = async (userBody: User) => {
    const user = await usersRepo.create(userBody);
    return user;
};
