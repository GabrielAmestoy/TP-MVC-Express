const express = require("express");
const router = express.Router(); /*solo require router*/
const {main,about} = require("../controllers/mainController") /*usa destructiring*/

router.get("/",main);
router.get("/about",about);


module.exports = router;