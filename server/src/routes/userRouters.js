const express = require("express");
const userController = require("./../controllers/userController"); //this format, instead of using path, helps intellisense
const authController = require("./../controllers/authController");
const oauthGoogleController = require("./../controllers/aouthController.google");
const router = express.Router();

// get basic details about a user
router.get("/test", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "user test successful",
  });
});

router.post("/login", authController.login); 
router.post("/logout", authController.logout); 
router.get("/getMe", authController.isLoggedIn); 
router.post("/signup", authController.signup); 
router.post("/verifyEmail", authController.verifyEmail); 

//for google oauth 
router.get("/auth/google/url", oauthGoogleController.getGoogleUrl);
router.get("/auth/google/", oauthGoogleController.authGoogle);

//for subscription
router.post(
  "/buySubscription",
  authController.protect,
  userController.buySubscription
);
router.post(
  "/validateSubscription",
  authController.protect,
  userController.validateSubscription
);

//change user details
router.post(
  "/updateDetails",
  authController.protect,
  userController.updateUserDetails
); //check what fields this updates in definition
router.post(
  "/updateProfilePick",
  authController.protect,
  userController.updateProfilePick
);
router.post(
  "/addPhotoLink",
  authController.protect,
  userController.addPhotoLink
);
router.post(
  "/deletePhotoLink", 
  authController.protect,
  userController.deletePhotoLink
);

const { getRecommendations } = require("../controllers/recommendationAlgo");
const { likeUser, rejectUser } = require("../controllers/matchController");
const {
  setUserPreferences,
  setPreferences,
} = require("../controllers/userController");
router.post("/getRecommendations", authController.protect, getRecommendations);
router.put("/likeUser", authController.protect, likeUser);
router.put("/rejectUser", authController.protect, rejectUser);
router.post(
  "/postLocation",
  authController.protect,
  userController.setLocation
);

router.post("/setPreferences", authController.protect, setPreferences);
module.exports = router;
