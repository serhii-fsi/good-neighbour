import { Request, Response, NextFunction } from "express";

import * as helpRequestsServices from "../../../../services/helpRequests";

import { AppError } from "../../../../common/errors/AppError";
import { errors } from "../../../../common/errors/errors";

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const AuthUserId = Number(req.header("X-User-ID"));
        const helpRequestBody = req.body;
        const { help_request_id } = req.params;

        const requestsByUserId = await helpRequestsServices.getByUserId(AuthUserId);

        if (requestsByUserId.length === 0) {
            throw new AppError(errors.HELP_REQUEST_NOT_FOUND, "No help request found");
        }

        // Authorisation validation
        if (!requestsByUserId.some(({ request }: any) => request.id === Number(help_request_id))) {
            throw new AppError(errors.VALIDATION_ERROR, "User is not authorised");
        }

        const updatedHelpRequest = await helpRequestsServices.update(
            help_request_id,
            helpRequestBody
        );
        res.status(200).send({ updatedHelpRequest });
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
