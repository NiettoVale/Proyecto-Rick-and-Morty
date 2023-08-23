const { Router } = require("express");
const router = Router();
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/Login");
const { postFav, deleteFav } = require("../controllers/handleFavorite");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
