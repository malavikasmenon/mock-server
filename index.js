const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3003;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.get('/users', (request, response) => {
    if (request.method === 'GET') {
        const users = require('./users/index')
        response.status(200).jsonp(users());
    }
})

server.get('/questions', (request, response) => {
    if (request.method === 'GET') {
        const questions = require('./questions/index')
        response.status(200).jsonp(questions());
    }
})

server.listen(port, () => {
    console.log('JSON Server is running. ')
})