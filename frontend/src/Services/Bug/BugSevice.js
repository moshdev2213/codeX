import axios from "axios";
import BaseService from "../Base/BaseService";

class BugService {
    constructor() {
        BaseService.getBaseURL();
        this.GET_BUG_REPORT = "bug/getBugReport";
        this.GENERATE_BUG_REFERENCE = "bug/generateBugReference";
        this.GET_BUG_IN_SINHALA = "bug/getBugInSinhala";
        this.GET_BUG_IN_TAMIL = "bug/getBugInTamil";
        this.GET_BUG_IN_NATIVE = "bug/getNativeLanguage";
        this.GET_ALL_BUGS = "bug/getAllBugs";
        this.GET_ALL_FAVOURITE_BUGS = "bug/getAllFavouriteBugs";
        this.GET_ALL_STARRED_BUGS = "bug/getAllStarredBugs";
        this.REMOVE_BUG_FAVOURITE = "bug/removeBugFavourite";
        this.REMOVE_BUG_STARRED = "bug/removeBugStarred";
        this.ADD_BUG_STARRED = "bug/addBugToStarred";
        this.ADD_BUG_FAVOURITE = "bug/addBugToFavourite";
        this.DLT_BUG = "bug/removeBug";
    }

    getBugReport(email, prompt) {
        let data = {
            email,
            prompt
        };
        return axios.post(this.GET_BUG_REPORT, data, BaseService.getHeader());
    }
    generateBugReference(email, id) {
        let data = {
            email,
            id
        };
        return axios.post(this.GENERATE_BUG_REFERENCE, data, BaseService.getHeader());
    }
    getBugInSinhala(email, id) {
        let data = {
            email,
            id
        };
        return axios.post(this.GET_BUG_IN_SINHALA, data, BaseService.getHeader());
    }
    getBugInTamil(email, id) {
        let data = {
            email,
            id
        };
        return axios.post(this.GET_BUG_IN_TAMIL, data, BaseService.getHeader());
    }
    getNativeLanguage(email, id) {
        let data = {
            email,
            id
        };
        return axios.post(this.GET_BUG_IN_NATIVE, data, BaseService.getHeader());
    }
    getAllBugs(input) {
        let data = {
            email: input
        };
        return axios.post(this.GET_ALL_BUGS, data, BaseService.getHeader());
    }
    getAllFavouriteBugs(input) {
        let data = {
            email: input
        };
        return axios.post(this.GET_ALL_FAVOURITE_BUGS, data, BaseService.getHeader());
    }
    getAllStarredBugs(input) {
        let data = {
            email: input
        };
        return axios.post(this.GET_ALL_STARRED_BUGS, data, BaseService.getHeader());
    }
    removeBugFavourite(email,id) {
        let data = {
            email,
            id
        };
        return axios.post(this.REMOVE_BUG_FAVOURITE, data, BaseService.getHeader());
    }
    removeBugStarred(email,id) {
        let data = {
            email,
            id
        };
        return axios.post(this.REMOVE_BUG_STARRED, data, BaseService.getHeader());
    }
    addBugToStarred(email,id) {
        let data = {
            email,
            id
        };
        return axios.post(this.ADD_BUG_STARRED, data, BaseService.getHeader());
    }
    addBugToFavourite(email,id) {
        let data = {
            email,
            id
        };
        return axios.post(this.ADD_BUG_FAVOURITE, data, BaseService.getHeader());
    }
    removeBug(email,id) {
        let data = {
            email,
            id
        };
        return axios.post(this.DLT_BUG, data, BaseService.getHeader());
    }
}

export default BugService = new BugService();
