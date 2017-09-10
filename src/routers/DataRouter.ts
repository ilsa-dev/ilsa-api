import {Router, Request, Response, NextFunction} from 'express';


/**
 * Data router
 */
export class DataRouter {
    router: Router;

    /**
     * Initialize the DataRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }

    /**
     * GET all data from this company and this Group
     */
    public getAll(req: Request, res: Response, next: NextFunction) {
        if (!req.params.company_id)
            res.status(500)
                .send({
                    message: 'Invalid request parameters received',
                    status: res.status
                });
        else {
            // DbProvider.find({
            //     company_id: req.params.company_id,
            //     ended: false
            // })
            //     .exec()
            //     .then(sensorGroups => {
            //         res.json(sensorGroups);
            //     })
            //     .catch(err => {
            //         res.status(500).send(err);
            //     })
        }
    }

    /**
     * Get this group
     * @param req
     * @param res
     * @param next
     */
    public getGroup(req: Request, res: Response, next: NextFunction) {
        if (!req.params.company_id || !req.params.group)
            res.status(500)
                .json({
                    message: 'Invalid request parameters received',
                    status: res.status
                });

        else {

            // -->Init: base query
            let findQuery,
                q = {
                    company_id: req.params.company_id,
                    Group: req.params.group,
                    ended: false
                };

            // -->Set: limit if any
            if (req.params.limit) {
                req.params.limit = +req.params.limit || 10;
                req.params.limit *= -1;
            }

            // -->Limit: the number of queries
            if (req.params.limit) {
                req.params.limit = +req.params.limit || 10;
                findQuery.limit(req.params.limit);
            }

            // -->Sort: by key in descending order
            if (req.params.sort) { // = Time_Stamp_UTC_ms
                findQuery.sort({
                    [req.params.sort]: -1
                })
            }

            // -->Run: query
            // DBProvider.find(findQuery)
            //     .exec()
            //     .then(sensorGroups => {
            //         res.json(sensorGroups);
            //     })
            //     .catch(err => {
            //         res.status(500).send(err);
            //     })
        }
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/:company_id/all', this.getAll);
        this.router.get('/:company_id/:group', this.getGroup);
        this.router.get('/:company_id/:group/:limit', this.getGroup);
        this.router.get('/:company_id/:group/:limit/:sort', this.getGroup);
    }

}

// Create the DataRouter, and export its configured Express.Router
const dataRoutes = new DataRouter();
dataRoutes.init();

export default dataRoutes.router;
