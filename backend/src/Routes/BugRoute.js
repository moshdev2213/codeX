import express from 'express';
BugController
import validateSchema from '../Middleware/ValidateSchema.js';
import BugYup from '../Utils/Validation/BugYup.js';
import validateToken from '../Middleware/ValidateToken.js';
import BugController from '../Controller/BugController.js';

const router = express.Router();

router.post('/getBugReport',  validateSchema(BugYup.getBugReport), BugController.getBugReport);
router.post('/generateBugReference',  validateSchema(BugYup.generateBugReference), BugController.generateBugReference);
router.post('/getBugInSinhala',  validateSchema(BugYup.getBugInSinhala), BugController.getBugInSinhala);
router.post('/getBugInTamil',  validateSchema(BugYup.getBugInTamil), BugController.getBugInTamil);
router.post('/getNativeLanguage',  validateSchema(BugYup.getNativeLanguage), BugController.getNativeLanguage);
router.post('/getAllBugs',  validateSchema(BugYup.getAllBugs), BugController.getAllBugs);
router.post('/getAllFavouriteBugs',  validateSchema(BugYup.getAllFavouriteBugs), BugController.getAllFavouriteBugs);
router.post('/getAllStarredBugs',  validateSchema(BugYup.getAllStarredBugs), BugController.getAllStarredBugs);
router.post('/removeBugFavourite',  validateSchema(BugYup.removeBugFavourite), BugController.removeBugFavourite);
router.post('/removeBugStarred',  validateSchema(BugYup.removeBugStarred), BugController.removeBugStarred);
router.post('/addBugToStarred',  validateSchema(BugYup.addBugToStarred), BugController.addBugToStarred);
router.post('/addBugToFavourite',  validateSchema(BugYup.addBugToFavourite), BugController.addBugToFavourite);

export default router;
