import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

// create typeorm connection
createConnection().then(connection => {
    const userRepository = connection.getRepository(User);

    // create and setup express app
    const app = express();
    app.use(bodyParser.json());

    // register routes

    app.get("/users/:id", async function(req: Request, res: Response) {
        const users = await userRepository.findOne({
          relations: ['photos'],
          where: {id: req.params.id}
        });
        res.json(users);
    });

    app.get("/add-data", async function(req: Request, res: Response) {
        const dummyData = {
          photos: [{
            name: 'name1'
          },{
            name: 'name2'
          }]
        }
        const user = await userRepository.create(dummyData);
        const results = await userRepository.save(user);
        return res.send(results);
    });

    // start express server
    app.listen(6565, () => { console.log('Server Started at 6565') });
});