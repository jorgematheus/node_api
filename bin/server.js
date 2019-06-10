'use strict'

const app = require('../src/app');
const debug = require('debug')('jorge:server');
const http = require('http');
const normalizePort = require('normalize-port');

const port = normalizePort(process.env.port || '3000');

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log('API rodando na porta ', port)