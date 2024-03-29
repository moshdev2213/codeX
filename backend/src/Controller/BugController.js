import Bug from "../Modal/Bug.js";
import linguaService from "../Utils/axios/lingua/linguaService.js";
import response from "../Utils/ResponseHandler/ResponseHandler.js";
import ResTypes from "../Utils/ResponseHandler/ResTypes.js";

class BugController {
    // addBug
    getBugReport = async (req, res) => {
        const { prompt, email } = req.body;
        try {
            const bugRes = await linguaService.getBugReport(prompt)
            if (!bugRes) return response(res, 403, { message: "Error GPT" })

            const bug_res_html = bugRes.data.htmlAnswer
            const bug_res_plain = bugRes.data.history[1].content

            const bug = new Bug({ email, bug_req: prompt, bug_res_html, bug_res_plain })
            const createdBug = await bug.save()
            if (!createdBug) return response(res, 403, { message: 'Error DB Record Creation' })
            if (createdBug) return response(res, 200, { id:bug._id,html: bug_res_html, plain: bug_res_plain })
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    // generateRef
    generateBugReference = async (req, res) => {
        const { email, id } = req.body;
        try {
            const existing = await Bug.findOne({ _id: id, email })
            if (!existing) return response(res, 404, { message: 'bug id mismatch' })

            const bugRes = await linguaService.getBugReference(existing.bug_req)
            if (!bugRes) return response(res, 403, { message: "Error GPT" })

            const bug_ref_html = bugRes.data.htmlAnswer
            const bug_ref_plain = bugRes.data.history[1].content

            const result = await Bug.updateOne(
                { _id: id },
                { $set: { bug_ref_plain, bug_ref_html } }
            );
            if (result.modifiedCount === 0) return response(res, 403, { message: 'Error db record updation' });
            return response(res, 200, { html: bug_ref_html, plain: bug_ref_plain })
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    // generateNativeLan
    getBugInSinhala = async (req, res) => {
        const { email, id } = req.body;
        try {
            const existing = await Bug.findOne({ _id: id, email })
            if (!existing) return response(res, 404, { message: 'bug id mismatch' })

            const bugRes = await linguaService.getBugInSinhala(existing.bug_req)
            if (!bugRes) return response(res, 403, { message: "Error GPT" })

            const bug_lng_sin_html = bugRes.data.htmlAnswer
            // const bug_lng_sin_plain = bugRes.data.history[1].content

            const result = await Bug.updateOne(
                { _id: id },
                { $set: { bug_lng_sin_html } }
            );
            if (result.modifiedCount === 0) return response(res, 403, { message: 'Error db record updation' });
            return response(res, 200, { html: bug_lng_sin_html })
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    // tamil
    getBugInTamil = async (req, res) => {
        const { email, id } = req.body;
        try {
            const existing = await Bug.findOne({ _id: id, email })
            if (!existing) return response(res, 404, { message: 'bug id mismatch' })

            const bugRes = await linguaService.getBugInTamil(existing.bug_req)
            if (!bugRes) return response(res, 403, { message: "Error GPT" })

            const bug_lng_tamil_html = bugRes.data.htmlAnswer
            // const bug_lng_sin_plain = bugRes.data.history[1].content

            const result = await Bug.updateOne(
                { _id: id },
                { $set: { bug_lng_tamil_html } }
            );
            if (result.modifiedCount === 0) return response(res, 403, { message: 'Error db record updation' });
            return response(res, 200, { html: bug_lng_tamil_html })
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    getNativeLanguage = async (req, res) => {
        const { email, id } = req.body;
        try {
            const existing = await Bug.findOne({ _id: id, email })
            if (!existing) return response(res, 404, { message: 'bug id mismatch' })

            const bugResTamil = await linguaService.getBugInTamil(existing.bug_req)
            if (!bugResTamil) return response(res, 403, { message: "Error tamil GPT" })

            const bugResSin = await linguaService.getBugInSinhala(existing.bug_req)
            if (!bugResSin) return response(res, 403, { message: "Error sinhala GPT" })

            const bug_lng_sin_html = bugResSin.data.htmlAnswer
            const bug_lng_tamil_html = bugResTamil.data.htmlAnswer

            const result = await Bug.updateOne(
                { _id: id },
                { $set: { bug_lng_sin_html,bug_lng_tamil_html } }
            );
            if (result.modifiedCount === 0) return response(res, 403, { message: 'Error db record updation' });
            return response(res, 200, { sinhala: bug_lng_sin_html,tamil:bug_lng_tamil_html })
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    // get all history
    getAllBugs = async (req, res) => {
        const { email } = req.body;
        try {
            const bugs = await Bug.find({ email })
            if (!bugs) return response(res, 404, { message: 'no bugs found' })
            return response(res, 200, {bugs,count:bugs.length})
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    // get favourite history
    getAllFavouriteBugs = async (req, res) => {
        const { email } = req.body;
        try {
            const bugs = await Bug.find({ email, favourite: true })
            if (!bugs) return response(res, 404, { message: 'no bugs found' })
            return response(res, 200, {bugs,count:bugs.length})
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    // get starred history
    getAllStarredBugs = async (req, res) => {
        const { email } = req.body;
        try {
            const bugs = await Bug.find({ email, starred: true })
            if (!bugs) return response(res, 404, { message: 'no bugs found' })
            return response(res, 200, {bugs,count:bugs.length})
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    // remove favourite
    removeBugFavourite = async (req, res) => {
        const { email, id } = req.body;
        try {
            const bug = await Bug.find({ _id: id, email })
            if (!bug) return response(res, 404, { message: 'no bugs found' })

            const result = await Bug.updateOne(
                { _id: id },
                { $set: { favourite: false } }
            );
            if (result.modifiedCount === 0) return response(res, 403, { message: 'Error db record updation' });
            return response(res, 200, { message: "removed from favourite",bug })
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    // remove starred
    removeBugStarred = async (req, res) => {
        const { email, id } = req.body;
        try {
            const bug = await Bug.find({ _id: id, email })
            if (!bug) return response(res, 404, { message: 'no bugs found' })

            const result = await Bug.updateOne(
                { _id: id },
                { $set: { starred: false } }
            );
            if (result.modifiedCount === 0) return response(res, 403, { message: 'Error db record updation' });
            return response(res, 200, { message: "removed from starred",bug })
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    // add bug to favourite favourite
    addBugToFavourite = async (req, res) => {
        const { email, id } = req.body;
        try {
            const bug = await Bug.find({ _id: id, email })
            if (!bug) return response(res, 404, { message: 'no bugs found' })

            const result = await Bug.updateOne(
                { _id: id },
                { $set: { favourite: true } }
            );
            if (result.modifiedCount === 0) return response(res, 403, { message: 'Error db record updation' });
            return response(res, 200, { message: "added to favourite",bug })
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    // add bug to starred
    addBugToStarred = async (req, res) => {
        const { email, id } = req.body;
        try {
            const bug = await Bug.find({ _id: id, email })
            if (!bug) return response(res, 404, { message: 'no bugs found' })

            const result = await Bug.updateOne(
                { _id: id },
                { $set: { starred: true } }
            );
            if (result.modifiedCount === 0) return response(res, 403, { message: 'Error db record updation' });
            return response(res, 200, { message: "added to starred",bug })
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
    removeBug = async (req, res) => {
        const { email, id } = req.body;
        try {
            const result = await Bug.findOneAndDelete({ _id: id, email });
            if (!result) return response(res, 403, { message: 'Error db delete process' });
            return response(res, 200, { message: "deleted sucessully" })
        } catch (error) {
            console.log(error);
            return response(res, 500, error);
        }
    }
}
export default BugController = new BugController()
