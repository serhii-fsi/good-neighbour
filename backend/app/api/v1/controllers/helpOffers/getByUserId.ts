import { Request, Response, NextFunction } from "express";

export const getByUserId = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
        next(error);
    }
};

/**
 * @swagger
 * components:
 *   responses:
 *     help-offers:
 *       404:
 *         description: The helper id was not found
 *         contents: 'application/json'
 *   schemas:
 *     HelpOffer:
 *       type: object
 *       properties:
 *         helper_id:
 *           type: integer
 *         help_request_id:
 *           type: integer
 *         status:
 *           type: string
 */
