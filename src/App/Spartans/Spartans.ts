export class Spartan {

    async getAll(req, res){
        try{
            await res.json({object1: "test", object2: "test2"});
        }
        catch(err){
            await res.json({ 'error': err });
        }
    }

    async getOne(req, res){
        try{
            await res.json({object1: "test"});
        }
        catch(err){
            await res.json({ 'error': err });
        }
    }
}