const express = require('express');
const router = express.Router();

const messageValidatorSchema = require('../validator/messageValidator');
const messageService = require('../services/messageService');

router.get('/', async function (req, res) {
  const messagesDB = await messageService.getMessages();
  res.render('index', { messagesDB });
});

router.route('/new')
  .get(function (req, res) {
    res.render('new', { title: 'Express' });
  })
  .post(function (req, res) {
    const { value, error } = messageValidatorSchema.validate(req.body);
    if (error) {
      throw new Error(error.message)
    }

    messageService.postMessage(value);
    res.redirect('/')
  })

module.exports = router;
