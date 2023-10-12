const express = require('express');
const router = express.Router();

const messageValidatorSchema = require('../validator/messageValidator');

const messages = [
  {
    id: 0,
    user: "Amando",
    message: "Hi there!",
    createdAt: new Date()
  },
  {
    id: 1,
    user: "Charles",
    message: "What a beautiful world!",
    createdAt: new Date()
  }
];

router.get('/', function (req, res) {
  res.render('index', { messages });
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

    
    res.redirect('/')
  })

module.exports = router;
