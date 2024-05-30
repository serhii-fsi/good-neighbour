import { Request, Response, NextFunction } from "express";

import * as helpRequestsServices from "../../../../services/helpRequests";

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { help_request_id } = req.params;
        await helpRequestsServices.remove(help_request_id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * /api/help-requests/{help-request_id}:
 *   delete:
 *     summary: Removes a help request based on help_request_id
 *     tags: [Help Requests]
 *     description: Removes a help request with the corresponding id.
 *     parameters:
 *       - name: help_request_id
 *         in: path
 *         description: ID of help request to return
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       204:
 *         description: Removes a help request with the corresponding id
 *       400:
 *         $ref: '#/components/responses/400'
 *       404:
 *         $ref: '#/components/responses/help-requests/404'
 */
