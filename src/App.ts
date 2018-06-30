import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import {DataRouter} from "./routers/DataRouter";


// Creates and configures an ExpressJS web server.
class App {
    public express: express.Application;

    /**
     * Configure Express middleware.
     */
    constructor() {
        // todo: prepare your db credentials, promise modifiers etc here

        // -->Init: routes
        this.express = express();
        this.middleware();
        this.routes();

        console.log('Express online.');

        // todo: prepare your db here
    }
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    /**
     * Load all API endpoints
     *      -- create route endpoints here
     *      -- check the sample
     */
    private routes(): void {
        let router = express.Router();

        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });


        this.express.use('/', router);
        // this.express.use('/api/v1/data', DataRouter);
    }
}

export default new App().express;
