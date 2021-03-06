'use strict';

const express = require('express');
const router = express.Router();

module.exports = (app) => {
  router.get('/', (req, res) => {
    app.set('entryPointUrl', null);
    req.session.destroy();
    res.redirect(app.get('configureUrl'));
  });

  return router;
};
