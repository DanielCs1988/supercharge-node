import { json } from "body-parser";
import { Container } from "inversify";
import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import "./controllers/game.controller";
import "./controllers/score.controller";
import {GameService} from "./services/game.service";
import {ScoreService} from "./services/score.service";
import {SocketServer} from "./socket/socket-server";
import {MultiplayerController} from "./controllers/multiplayer.controller";
import {connect} from "mongoose";

const port = process.env.PORT || 8080;

connect(process.env.MONGODB_URI!, { useNewUrlParser: true });

const container = new Container();
container.bind<GameService>('GameService').to(GameService).inSingletonScope();
container.bind<ScoreService>('ScoreService').to(ScoreService).inSingletonScope();

const server = new InversifyExpressServer(container);
server.setConfig(app => {
    app.use(json());
});

const app = server.build();

const multiplayerController = new MultiplayerController(container.get('GameService'));
const socketServer = new SocketServer(app, [ multiplayerController ]);
socketServer.init();

app.listen(port, () => console.log(`Server is running on port ${port}...`));