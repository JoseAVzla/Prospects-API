import * as express from "express";
import * as cors from 'cors';
import routes from './prospectos.routes';

const port = 3000;
var app = express();
app.use(cors());
app.use('/', routes)

app.listen(port, () => console.log(`Ejecutando server en http://localhost:${port}!!`));
