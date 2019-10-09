const express = require("express");
const formidable = require("express-formidable");
const createResource = require("../../database/queries/createResource.js");
const getDB = require("../../database/connection.js").getDB;
const Joi = require("joi");

express().use(formidable());

const addResource = (req, res) => {
    const schema = Joi.object().keys({
        topic: Joi.string()
            .alphanum()
            .min(3)
            .max(100)
            .required(),
        resourceUrl: Joi.string()
            .regex(
                /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
            )
            .required(),
        comment: Joi.string()
            .min(3)
            .max(1000),
        dateAdded: Joi.string()
    });

    const resourceToAdd = {
        topic: req.fields.topic,
        dateAdded: new Date(Date.now()).toUTCString(),
        comment: req.fields.comment,
        resourceUrl: req.fields.resourceUrl
    };

    schema
        .validate(resourceToAdd, { abortEarly: false })
        .then(result => {
            const db = getDB();

            createResource(db, result);

            res.status(201).send(result);
        })
        .catch(error => {
            res.status(400).send("Validation failed.");
        });
};

module.exports = addResource;
