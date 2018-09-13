const express = require('express');
const next = require('next');



const port = parseInt('3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()

    .then(() => {
        const server = express();

        server.get('/', (req, res) => {
            return app.render(req, res, '/')
        });
        server.get('*', (req, res) => {
            return handle(req, res)
        });
        server.listen(port, (err) => {
            if (err) throw err
        })
    });