import { Spartan } from './Spartans'
import { authToken } from '../../Infra/Auth'

const controller = new Spartan();
const SpartansRoutes = (app) => {

    app.route('/spartans').get(authToken, controller.getAll)
    app.route('/spartan/:id').get(controller.getOne)
}

export { SpartansRoutes }