import {SpartansRoutes} from '../Spartans/Routes'

const Routes = (app) => {
    SpartansRoutes(app);

    // home
    app.route('/').get((req, res) => {
        res.json({
            title: 'Welcome to my awesome API'
        });
    });
}


export {Routes}