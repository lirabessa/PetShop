const app = require ('./app')
const Loaders = require ('./loads/index')

Loaders.start();

app.listen(3333, () => console.log('Servidor funcionado'));