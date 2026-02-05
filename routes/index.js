const express = require(`express`);
const router = express.Router();

router.get(`/ttech`, (req, res) => {
    res.send("Tooele Tech is Awesome");
});

module.exports = router; 