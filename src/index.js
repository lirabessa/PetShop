const app = require ('./app')
const Loaders = require ('./loads/index')
const cors = require("cors")

app.use(cors());
Loaders.start();

app.listen(3333, () => console.log('Servidor funcionado'));