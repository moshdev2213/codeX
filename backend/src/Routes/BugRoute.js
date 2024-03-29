import express from 'express';
BugController
import validateSchema from '../Middleware/ValidateSchema.js';
import BugYup from '../Utils/Validation/BugYup.js';
import validateToken from '../Middleware/ValidateToken.js';
import BugController from '../Controller/BugController.js';

const router = express.Router();

router.post('/getBugReport',  validateToken,validateSchema(BugYup.getBugReport), BugController.getBugReport);
router.post('/generateBugReference',  validateToken,validateSchema(BugYup.generateBugReference), BugController.generateBugReference);
router.post('/getBugInSinhala',validateToken,  validateSchema(BugYup.getBugInSinhala), BugController.getBugInSinhala);
router.post('/getBugInTamil',validateToken,  validateSchema(BugYup.getBugInTamil), BugController.getBugInTamil);
router.post('/getNativeLanguage',validateToken,  validateSchema(BugYup.getNativeLanguage), BugController.getNativeLanguage);
router.post('/getAllBugs',validateToken,  validateSchema(BugYup.getAllBugs), BugController.getAllBugs);
router.post('/getAllFavouriteBugs',validateToken,  validateSchema(BugYup.getAllFavouriteBugs), BugController.getAllFavouriteBugs);
router.post('/getAllStarredBugs', validateToken, validateSchema(BugYup.getAllStarredBugs), BugController.getAllStarredBugs);
router.post('/removeBugFavourite',validateToken,  validateSchema(BugYup.removeBugFavourite), BugController.removeBugFavourite);
router.post('/removeBugStarred',validateToken,  validateSchema(BugYup.removeBugStarred), BugController.removeBugStarred);
router.post('/removeBug',validateToken,  validateSchema(BugYup.removeBug), BugController.removeBug);
router.post('/addBugToStarred',validateToken,  validateSchema(BugYup.addBugToStarred), BugController.addBugToStarred);
router.post('/addBugToFavourite',validateToken,  validateSchema(BugYup.addBugToFavourite), BugController.addBugToFavourite);

export default router;
