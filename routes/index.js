const express = require('express');
const router = express.Router();
const joi = require('joi');

router.get('/', (req, res) => {
    res.send('Hello from express!');
});

router.get('/about/', (req, res) => {

    const schema = {
        // name: joi.string().min(3).required(),
        id: joi.objectId().required(),
    }

    const { error } = joi.validate(req.query, schema);

    if (error) {
        res.status(400).send(error.details);
    }

    res.send({
        // id: req.params.id,
        id: req.query.id,
    });
});


module.exports = router;