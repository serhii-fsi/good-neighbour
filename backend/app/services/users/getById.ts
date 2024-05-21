import * as usersRepo from "../../repositories/users";

export const getById = async (id: string) => {
    const user = await usersRepo.getById(id);
    return user;
};
