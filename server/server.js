const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.resolve(__dirname, './db.json'));
const middlewares = jsonServer.defaults();

server.db = router.db;
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(auth);


server.use(router);
const port = 3004;
server.listen(port, () => {
    console.log('Json server running on port ' + port);
})












