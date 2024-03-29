import yup from 'yup';

const genderType = ['male', 'female'];
class BugYup {
    getBugReport = yup.object({
        prompt: yup.string().required(),
        email: yup.string().email().required()
    });
    getBug = yup.object({
        email: yup.string().email().required()
    });
    generateBugReference = yup.object({
        email: yup.string().email().required(),
        id:yup.string().required()
    })
    getBugInSinhala = yup.object({
        email: yup.string().email().required(),
        id:yup.string().required()
    })
    getBugInTamil = yup.object({
        email: yup.string().email().required(),
        id:yup.string().required()
    })
    getAllBugs = yup.object({
        email: yup.string().email().required()
    })
    getAllFavouriteBugs = yup.object({
        email: yup.string().email().required()
    })
    getAllStarredBugs=yup.object({
        email: yup.string().email().required()
    })
    removeBugFavourite=yup.object({
        email: yup.string().email().required(),
        id:yup.string().required()
    })
    removeBugStarred=yup.object({
        email: yup.string().email().required(),
        id:yup.string().required()
    })

}

export default new BugYup();
