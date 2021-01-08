import {logger} from "../../Infra/logger";

export class Spartan {

    /**
     * @api {get} /spartans list of all spartans
     * @apiDescription affiche la liste de tous les spartiates
     * @apiGroup Spartans
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     * @apiErrorExample {json} List error
     *  HTTP/1.1 500
     */
    async getAll(req, res){
        try{
            logger.info(`return spartans list`);
            await res.json({object1: "test", object2: "test2"});
        }
        catch(err){
            logger.error(`return spartans list failed => ${err}`);
            await res.json({ 'error': err });
        }
    }

    /**
     * @api {get} /spartan/:id get one spartan
     * @apiDescription affiche le détail d'un spartiate
     * @apiParam {Number}  id id du spartiate
     * @apiGroup Spartans
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     * @apiErrorExample {json} List error
     *  HTTP/1.1 500
     */
    async getOne(req, res){
        try{
            logger.info(`return spartan ${req.params.id}`);
            await res.json({object1: "test"});
        }
        catch(err){
            logger.error(`return spartan ${req.params.id} failed => ${err}`);
            await res.json({ 'error': err });
        }
    }
}