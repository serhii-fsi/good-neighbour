import * as usersRepo from "../../repositories/users";

export const getAll = async () => {
    const allUsers = await usersRepo.getAll();
    return allUsers;
};
