const router = require('express').Router()
const passport = require('passport')

router.get("/login/success", (req, res) => {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
})

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect("http://localhost:3000/");
  });
});

router.get("/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get("/google/callback",
passport.authenticate("google", {  failureRedirect: "/login/failed" }), 
function(req, res) {
    // Successful authentication, redirect secrets.
    res.redirect("http://localhost:3000/home");
}
);

module.exports = router