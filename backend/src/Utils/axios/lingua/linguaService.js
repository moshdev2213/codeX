import axios from "axios";
import BaseService from "../Base/BaseService.js";

class LinguaService {
    constructor() {
        BaseService.getBaseURL()
        this.URL = ""
    }
    getBugReport(input) {
        let data = {
            "prompt": `${input} fing bug and give explanation for 100 words`,
            "target": "en",
            "model": "linguaGPT-2",
            "uid": "gM87F3Umb6WNAhp7Nj17V319B0C3",
            "key": "e6c364519a0271ee58eb53480c53a9447a68bc1513e35d4f9e867fb27d92c224"
        }
        return axios.post(this.URL, data,BaseService.getHeader())
    }
    getBugReference(input) {
        let data = {
            "prompt": `${input} give me about 5 different reference links for resolving the bug in the code`,
            "target": "en",
            "model": "linguaGPT-2",
            "uid": "gM87F3Umb6WNAhp7Nj17V319B0C3",
            "key": "e6c364519a0271ee58eb53480c53a9447a68bc1513e35d4f9e867fb27d92c224"
        }
        return axios.post(this.URL, data)
    }
    getBugInSinhala(input) {
        let data = {
            "prompt": `${input} fing bug and give explanation for 100 words`,
            "target": "si",
            "model": "linguaGPT-2",
            "uid": "gM87F3Umb6WNAhp7Nj17V319B0C3",
            "key": "e6c364519a0271ee58eb53480c53a9447a68bc1513e35d4f9e867fb27d92c224"
        }
        return axios.post(this.URL, data)
    }
    getBugInTamil(input) {
        let data = {
            "prompt": `${input} find bug and give explanation for 100 words`,
            "target": "ta",
            "model": "linguaGPT-2",
            "uid": "gM87F3Umb6WNAhp7Nj17V319B0C3",
            "key": "e6c364519a0271ee58eb53480c53a9447a68bc1513e35d4f9e867fb27d92c224"
        }
        return axios.post(this.URL, data)
    }
}
export default LinguaService = new LinguaService();