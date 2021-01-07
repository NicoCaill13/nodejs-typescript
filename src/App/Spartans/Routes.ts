import {Spartan} from './Spartans'

const controller = new Spartan();
const SpartansRoutes = (app) => {

    app.route('/spartans').get(controller.getAll)
    app.route('/spartan/:id').get(controller.getOne)
}

export {SpartansRoutes}