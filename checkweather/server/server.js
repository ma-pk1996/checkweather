const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');
const port = 3004;

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, './db.json'));
const middlewares = jsonServer.defaults();



server.db = router.db;
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(auth);
server.use(jsonServer.rewriter(require('./routes.json')));

server.use(router);

server.listen(port, () => {
    console.log('server running on port ' + port)
})


