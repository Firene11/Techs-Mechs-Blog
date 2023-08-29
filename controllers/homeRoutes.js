// router get login and render to homepage

const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

