import * as usersRepo from "../../repositories/users";

export const update = async (id: string, updateBody: any) => {
    const user = await usersRepo.update(id, updateBody);
    return user;
};
