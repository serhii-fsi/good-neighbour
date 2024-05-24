import * as helpRequestsRepo from "../../repositories/helpRequests/remove"
import { AppError } from "../../common/errors/AppError"
import { errors } from "../../common/errors/errors"

export const remove = async (help_request_id:any) => {
    
    const {rowCount, rows} = await helpRequestsRepo.remove(help_request_id)
    if(rowCount === 0 || rows[0]){
        throw new AppError(errors.HELP_REQUEST_NOT_FOUND, `No help request found with ${help_request_id}`) 
    }
    return rows
}