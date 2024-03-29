import axios from "axios";
import BaseService from "../Base/BaseService.js";

class LinguaService {
    constructor() {
        this.URL = BaseService.getBaseURL();
        this.defaultParams = {
            "target": "en",
            "model": process.env.Lingua_Model,
            "uid": process.env.Lingua_UID,
            "key": process.env.Lingua_Token
        };
    }

    async postRequest(prompt, target) {
        const data = {
            ...this.defaultParams,
            "prompt": prompt,
            "target": target
        };
        try {
            const response = await axios.post(this.URL, data, BaseService.getHeader());
            return response;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }

    async getBugReport(input) {
        const prompt = `${input} find error and give explanation for 100 words`;
        return await this.postRequest(prompt, "en");
    }

    async getBugReference(input) {
        const prompt = `${input} give me about 5 different reference links for resolving the error in the code`;
        return await this.postRequest(prompt, "en");
    }

    async getBugInSinhala(input) {
        const prompt = `${input} find error and give explanation for 100 words`;
        return await this.postRequest(prompt, "si");
    }

    async getBugInTamil(input) {
        const prompt = `${input} find error and give explanation for 100 words`;
        return await this.postRequest(prompt, "ta");
    }
}
export default LinguaService = new LinguaService();

