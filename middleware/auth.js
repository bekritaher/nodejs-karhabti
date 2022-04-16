const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    try {
        const token = req.cookies.token;
        console.log(req.cookies);
        if (!token) return res.redirect("http://localhost:3000/login");

        const verified = jwt.verify(token, process.env.JWT_SECRET);


        req.user = verified.user;

        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ errorMessage: "Unauthorized" });
    }
}

module.exports = auth;