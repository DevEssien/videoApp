const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.get("/", userController.indexPage);

router.get("/videoplayer", userController.getVideo);

module.exports = router;
