import * as helpTypesRepo from "../../repositories/helpTypes";

export const getAll = async () => {
    const allUsers = await helpTypesRepo.getAll();
    return allUsers;
};
