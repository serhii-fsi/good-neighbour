import { Request, Response, NextFunction } from "express";

import * as helpRequestsServices from "../../../../services/helpRequests";

import { getByUserId } from "../../../../services/helpRequests/getByUserId";
import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";

export const update = async (req: Request, res: Response, next: NextFunction) => {

    const AuthUserId = Number(req.header('X-User-ID'));

    const helpRequestBody = req.body;
    const { help_request_id } = req.params;

    try {
        // checks requests against logged in user id (to test, hardcode AuthUserId -> 10)
        const requestsByUserId = await getByUserId(AuthUserId);

        if (requestsByUserId.length !== 0 &&  requestsByUserId.some((reqObj: any) => reqObj.request.id === Number(help_request_id))) {
            const updatedHelpRequest = await helpRequestsServices.update(
                help_request_id,
                helpRequestBody
            )
            res.status(200).send({ updatedHelpRequest });
        } else {
            throw new AppError(errors.VALIDATION_ERROR, "User is not authorised");
        }

    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/help-requests/:help-request_id:
 *   patch:
 *     summary: Updates a help request based on help_request_id
 *     tags: [Help Requests]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpRequest'
 *     description: Update a help request with the corresponding id.
 *     responses:
 *       200:
 *         description: Responds with an updated help request with the corresponding id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpRequest'
 *       400:
 *         $ref: '#/components/responses/400'
 *       404:
 *         $ref: '#/components/responses/help-requests/404'
 */
