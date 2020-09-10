const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

function checkMissingFields(req, res, next) {
    if (!req.body.nome || !req.body.endereco || !req.body.latitude || !req.body.latitude)
        return res.status(400).json({message: "Missing fields."});
    
    return next();
}

function checkExistingPoint(req, res, next) {
    let nomeExists = false;

    projects.forEach(element => {
        if (element.nome == req.body.nome)
            nomeExists = true;
    });

    if (nomeExists)
        return res.status(400).json({message: "There is already a place with this name."});

    return next();
}

server.post('/pontos-coleta', checkMissingFields, checkExistingPoint, (req, res) => {
    projects.push(req.body);

    return res.json(projects);
});

server.get('/pontos-coleta', (req, res) => {
    return res.json(projects);
});

server.put('/pontos-coleta', (req, res) => {
    const { nome, endereco, latitude, longitude } = req.body;

    projects.forEach(element => {
        if (element.nome == nome) {
            element.endereco = endereco;
            element.latitude = latitude;
            element.longitude = longitude;
        }
    });

    return res.json(projects);
});

server.listen(3000);