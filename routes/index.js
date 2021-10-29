const router = require("express").Router();

const authRoute = require("./auth");
const postRoute = require("./posts");
const categoryRoute = require("./categories");

router.post("/api/auth", authRoute);
router.post("/api/users", userRoute);
router.post("/api/posts", postRoute);
router.post("/api/categories", categoryRoute);


module.exports = router;