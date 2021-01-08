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
            await res.json({object1: "test", object2: "test2"});
        }
        catch(err){
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
            await res.json({object1: "test"});
        }
        catch(err){
            await res.json({ 'error': err });
        }
    }
}