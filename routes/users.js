const router = require("express").Router();
const usersController = require("../controllers/users");

// GET /users/account
router.get("/account", usersController.getUser);

// POST /users/account
router.post("/account", usersController.updateUser);

router.get("/isLogin", usersController.isLoggedIn);

router.post("/updateBalance", usersController.updateBalance);

// POST /users/entry
router.post("/entry", usersController.markEntry);

// POST /users/exit
router.post("/exit", usersController.markExit);

module.exports = router;